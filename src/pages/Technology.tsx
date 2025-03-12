
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CameraIcon, MicroscopeIcon, BrainIcon, BarChartIcon, CloudIcon, HeartPulseIcon } from "lucide-react";

const Technology = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Technology</h1>
            <p className="text-xl text-gray-600">
              Cutting-edge image analysis for accurate, non-invasive anemia detection
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-gray-700">
              Our anemia detection system combines advanced image processing techniques with machine learning to analyze 
              the pallor of the conjunctiva, which has been clinically proven to correlate with hemoglobin levels.
              The technology goes beyond simple color analysis, considering multiple parameters and contextual factors
              to provide accurate results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CameraIcon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Image Acquisition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our system uses standardized image capture protocols to ensure consistent, high-quality photos of
                  the conjunctiva. The process is simple enough to be performed with standard smartphone cameras
                  under controlled lighting conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CloudIcon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Image Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Raw images undergo preprocessing to normalize for lighting conditions, enhance relevant features,
                  and isolate the conjunctival region for analysis. This ensures consistent results regardless of
                  image capture conditions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <BrainIcon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Machine Learning Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our proprietary machine learning algorithms analyze multiple color and texture parameters of the
                  conjunctiva. The models have been trained on a diverse dataset to ensure accuracy across different
                  ethnicities and age groups.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <BarChartIcon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Result Interpretation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  The system provides an estimated hemoglobin level and anemia status classification (none, mild,
                  moderate, or severe) based on World Health Organization standards, along with confidence intervals
                  for the prediction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Image Requirements</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Minimum resolution: 1080p (1920×1080 pixels)</li>
                <li>Focus: Sharp focus on the conjunctival area</li>
                <li>Lighting: Consistent, diffuse lighting without glare</li>
                <li>Format: JPEG or PNG format</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
              <p className="text-gray-700">
                Average processing time is less than 5 seconds from image upload to result display,
                depending on internet connection speed and server load.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Accuracy Metrics</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Sensitivity: 92% for detecting moderate to severe anemia</li>
                <li>Specificity: 88% for ruling out anemia</li>
                <li>Mean Absolute Error: ±0.8 g/dL for hemoglobin estimation</li>
                <li>Performance validated against clinical laboratory hemoglobin measurements</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">System Requirements</h3>
              <p className="text-gray-700">
                The system is accessible via web browsers on any device with internet connectivity,
                with optimized performance for both desktop and mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
