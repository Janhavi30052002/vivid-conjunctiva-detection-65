
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
    key.toLowerCase().includes('hemoglobin') || key.toLowerCase().includes('hgb') || key.toLowerCase().includes('hb')
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
  
  // Convert to standard format
  return {
    status: getAnemiaStatus(parseFloat(closestEntry[hemoglobinKey])),
    hemoglobin: parseFloat(closestEntry[hemoglobinKey]),
    confidence: calculateConfidence(smallestDifference)
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
