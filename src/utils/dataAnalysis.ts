
/**
 * Analyze hemoglobin values to determine anemia status and confidence
 */
export const analyzeHemoglobin = (value: number) => {
  let status: 'normal' | 'mild' | 'moderate' | 'severe';
  
  // Standard clinical ranges for anemia classification
  if (value >= 12) {
    status = 'normal';
  } else if (value >= 10) {
    status = 'mild';
  } else if (value >= 8) {
    status = 'moderate'; 
  } else {
    status = 'severe';
  }
  
  // Calculate confidence based on distance from threshold values
  let confidence = 0.85; // Base confidence
  
  // Adjust confidence based on proximity to threshold values
  const thresholds = [8, 10, 12];
  for (const threshold of thresholds) {
    const distance = Math.abs(value - threshold);
    if (distance < 0.5) {
      // Reduce confidence if value is close to a threshold
      confidence -= (0.5 - distance) * 0.1;
    }
  }
  
  return {
    status,
    hemoglobin: value,
    confidence: parseFloat(confidence.toFixed(2))
  };
};

/**
 * Find the closest matching dataset entry to an input value
 */
export const findClosestMatch = (dataset: any[], targetHemoglobin: number) => {
  if (!dataset || dataset.length === 0) return null;

  // Find hemoglobin column (might have different naming conventions)
  const firstRow = dataset[0];
  const hemoglobinKey = Object.keys(firstRow).find(key => 
    key.toLowerCase().includes('hemoglobin') || 
    key.toLowerCase().includes('hgb') || 
    key.toLowerCase().includes('hb') ||
    key.toLowerCase().includes('hb_level')
  );
  
  if (!hemoglobinKey) return null;
  
  // Find closest match
  let closestEntry = dataset[0];
  let smallestDifference = Math.abs(parseFloat(closestEntry[hemoglobinKey]) - targetHemoglobin);
  
  for (const entry of dataset) {
    const hbValue = parseFloat(entry[hemoglobinKey]);
    const difference = Math.abs(hbValue - targetHemoglobin);
    
    if (difference < smallestDifference) {
      smallestDifference = difference;
      closestEntry = entry;
    }
  }
  
  // Extract additional patient information for enhanced reporting
  const patientInfo = {
    age: closestEntry['Age (Months)'] || closestEntry['AGE'] || null,
    gender: closestEntry['GENDER'] || closestEntry['Gender'] || null,
    severity: closestEntry['Severity'] || null,
    remark: closestEntry['REMARK'] || null,
    predictedStatus: closestEntry['Predicted_Anemia_Status'] || null
  };
  
  // Determine status based on dataset severity if available, otherwise use the hemoglobin value
  let status: 'normal' | 'mild' | 'moderate' | 'severe';
  
  if (patientInfo.severity) {
    const severity = patientInfo.severity.toString().toLowerCase();
    if (severity.includes('non') || severity.includes('normal')) {
      status = 'normal';
    } else if (severity.includes('mild')) {
      status = 'mild';
    } else if (severity.includes('moderate')) {
      status = 'moderate';
    } else if (severity.includes('severe')) {
      status = 'severe';
    } else {
      status = getAnemiaStatus(parseFloat(closestEntry[hemoglobinKey]));
    }
  } else {
    status = getAnemiaStatus(parseFloat(closestEntry[hemoglobinKey]));
  }
  
  return {
    status,
    hemoglobin: parseFloat(closestEntry[hemoglobinKey]),
    confidence: calculateConfidence(smallestDifference),
    patientInfo
  };
};

/**
 * Helper to get anemia status from hemoglobin value
 */
function getAnemiaStatus(hemoglobin: number): 'normal' | 'mild' | 'moderate' | 'severe' {
  if (hemoglobin >= 12) return 'normal';
  if (hemoglobin >= 10) return 'mild';
  if (hemoglobin >= 8) return 'moderate';
  return 'severe';
}

/**
 * Calculate confidence based on how close the match is
 */
function calculateConfidence(difference: number): number {
  // The closer to 0 the difference is, the higher the confidence
  const confidence = 1 - (difference * 0.1);
  return parseFloat(Math.max(0.75, Math.min(0.98, confidence)).toFixed(2));
}

/**
 * Extract demographic data and statistics from dataset
 */
export const analyzeDataset = (dataset: any[]) => {
  if (!dataset || dataset.length === 0) return null;
  
  const firstRow = dataset[0];
  const hemoglobinKey = Object.keys(firstRow).find(key => 
    key.toLowerCase().includes('hemoglobin') || 
    key.toLowerCase().includes('hgb') || 
    key.toLowerCase().includes('hb') ||
    key.toLowerCase().includes('hb_level')
  );
  
  if (!hemoglobinKey) return null;
  
  // Extract hemoglobin values
  const hbValues = dataset.map(entry => parseFloat(entry[hemoglobinKey]))
    .filter(value => !isNaN(value));
    
  // Calculate statistics
  const stats = {
    count: hbValues.length,
    min: Math.min(...hbValues),
    max: Math.max(...hbValues),
    avg: hbValues.reduce((sum, val) => sum + val, 0) / hbValues.length
  };
  
  return stats;
};
