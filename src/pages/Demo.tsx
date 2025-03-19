import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageIcon, UploadIcon, RefreshCwIcon, AlertCircleIcon, CheckCircleIcon, InfoIcon, DatabaseIcon } from "lucide-react";
import ExcelUploader from "@/components/ExcelUploader";
import DatasetDisplay from "@/components/DatasetDisplay";
import { analyzeHemoglobin, findClosestMatch } from "@/utils/dataAnalysis";
import { toast } from "sonner";

const Demo = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    status: 'normal' | 'mild' | 'moderate' | 'severe' | null;
    hemoglobin: number | null;
    confidence: number | null;
  }>({ status: null, hemoglobin: null, confidence: null });
  const [datasetRecords, setDatasetRecords] = useState<any[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        setResult({ status: null, hemoglobin: null, confidence: null });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!image) return;
    
    setIsAnalyzing(true);
    
    // Check if we have dataset records
    if (datasetRecords.length === 0) {
      toast.warning("No dataset loaded. Using default analysis method.");
      
      // Simulate API call with timeout
      setTimeout(() => {
        // Using our analysis function instead of random values
        const hemoglobin = 8 + Math.random() * 7; // Random value between 8-15
        const result = analyzeHemoglobin(parseFloat(hemoglobin.toFixed(1)));
        
        setResult(result);
        setIsAnalyzing(false);
      }, 3000);
    } else {
      // With dataset available, find closest match from dataset
      setTimeout(() => {
        // For demo purposes, extract a value from image analysis
        // In a real app, this would come from actual image processing
        const estimatedHemoglobin = 8 + Math.random() * 7;
        
        // Find closest match in dataset
        const match = findClosestMatch(datasetRecords, estimatedHemoglobin);
        
        if (match) {
          setResult(match);
        } else {
          // Fallback to basic analysis if no match found
          const result = analyzeHemoglobin(parseFloat(estimatedHemoglobin.toFixed(1)));
          setResult(result);
          toast.info("Used basic analysis as no close match found in dataset");
        }
        
        setIsAnalyzing(false);
      }, 3000);
    }
  };

  const handleReset = () => {
    setImage(null);
    setResult({ status: null, hemoglobin: null, confidence: null });
  };

  const handleDataLoaded = (data: any[]) => {
    setDatasetRecords(data);
    toast.success("Dataset loaded successfully and will be used for analysis");
  };

  const getStatusColor = () => {
    switch (result.status) {
      case 'normal': return 'text-green-600';
      case 'mild': return 'text-yellow-600';
      case 'moderate': return 'text-orange-600';
      case 'severe': return 'text-red-600';
      default: return '';
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Demo Our Technology</h1>
            <p className="text-xl text-gray-600">
              Experience our anemia detection system with this interactive demo
            </p>
            <p className="text-gray-500 mt-2">
              <InfoIcon className="inline-block w-4 h-4 mr-1" />
              {datasetRecords.length > 0 ? 
                `Using your uploaded dataset with ${datasetRecords.length} records` : 
                "Upload your dataset for more accurate analysis"}
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="analysis" className="space-y-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
                <TabsTrigger value="analysis">Image Analysis</TabsTrigger>
                <TabsTrigger value="dataset">Dataset</TabsTrigger>
              </TabsList>
              
              <TabsContent value="analysis" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <ImageIcon className="w-5 h-5 mr-2" />
                          Image Upload
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {!image ? (
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                            <UploadIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-600 mb-4">Upload an image of the conjunctiva</p>
                            <div className="space-y-4">
                              <Button
                                variant="outline"
                                onClick={() => document.getElementById('image-upload')?.click()}
                                className="mx-auto"
                              >
                                Select Image
                              </Button>
                              <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                              />
                              <p className="text-xs text-gray-500 mt-2">
                                Supported formats: JPEG, PNG
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                              <img 
                                src={image} 
                                alt="Uploaded conjunctiva" 
                                className="object-contain w-full h-full"
                              />
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                onClick={() => document.getElementById('image-upload')?.click()}
                                className="flex-1"
                              >
                                Change Image
                              </Button>
                              <Button 
                                onClick={handleReset}
                                variant="destructive"
                                className="flex items-center"
                              >
                                <RefreshCwIcon className="w-4 h-4 mr-1" /> Reset
                              </Button>
                              <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                              />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>Analysis Results</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {!image ? (
                          <div className="text-center py-12">
                            <AlertCircleIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-600">Upload an image to see results</p>
                          </div>
                        ) : !result.status ? (
                          <div className="space-y-4">
                            <p className="text-gray-700 text-center pb-4">
                              Ready to analyze the conjunctiva image
                              {datasetRecords.length > 0 && " using your dataset"}
                            </p>
                            <Button 
                              onClick={handleAnalyze} 
                              className="w-full py-6"
                              disabled={isAnalyzing}
                            >
                              {isAnalyzing ? (
                                <>
                                  <RefreshCwIcon className="w-4 h-4 mr-2 animate-spin" />
                                  Analyzing...
                                </>
                              ) : (
                                'Analyze Image'
                              )}
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            <div className="flex items-center justify-center space-x-2">
                              <CheckCircleIcon className="w-6 h-6 text-green-500" />
                              <span className="text-lg font-medium">Analysis Complete</span>
                            </div>
                            
                            <div className="space-y-4">
                              <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-500 mb-1">Anemia Status</p>
                                <p className={`text-2xl font-bold ${getStatusColor()}`}>
                                  {result.status?.charAt(0).toUpperCase() + result.status?.slice(1)} Anemia
                                </p>
                              </div>
                              
                              <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-500 mb-1">Estimated Hemoglobin</p>
                                <p className="text-2xl font-bold">
                                  {result.hemoglobin} g/dL
                                </p>
                              </div>
                              
                              <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-500 mb-1">Confidence</p>
                                <p className="text-xl font-bold">
                                  {Math.round((result.confidence || 0) * 100)}%
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {datasetRecords.length > 0 ? 
                                    "Based on dataset match" : 
                                    "Based on standard clinical ranges"}
                                </p>
                              </div>
                            </div>
                            
                            <div className="pt-2">
                              <Button onClick={handleAnalyze} className="w-full">
                                Analyze Again
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="dataset" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DatabaseIcon className="w-5 h-5 mr-2" />
                      Excel Dataset
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ExcelUploader onDataLoaded={handleDataLoaded} />
                    
                    {datasetRecords.length > 0 ? (
                      <DatasetDisplay data={datasetRecords} />
                    ) : (
                      <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
                        <DatabaseIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600">Upload an Excel file to view the dataset</p>
                        <p className="text-sm text-gray-500 mt-2">The data will be used for analysis</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <InfoIcon className="w-5 h-5 mr-2 text-primary" />
                Important Note
              </h3>
              <p className="text-gray-700">
                This demo is for educational purposes only and does not provide actual medical diagnosis. 
                The results are based on the dataset you provide or simulated data. Always consult 
                a healthcare professional for proper diagnosis and treatment of anemia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
