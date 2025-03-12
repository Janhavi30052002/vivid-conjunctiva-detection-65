
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MicroscopeIcon, ScanEyeIcon, HeartPulseIcon, CheckCircleIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-up text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 rounded-full">
              <span className="text-primary text-sm font-semibold">Medical Innovation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Advanced Anemia Detection
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Using cutting-edge image analysis of conjunctiva to detect anemia accurately and non-invasively.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
              <ScanEyeIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Non-Invasive Analysis</h3>
              <p className="text-gray-600">Quick and painless detection through conjunctiva imaging</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up [animation-delay:200ms]">
              <HeartPulseIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
              <p className="text-gray-600">Advanced algorithms ensure precise anemia detection</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up [animation-delay:400ms]">
              <CheckCircleIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Assessment</h3>
              <p className="text-gray-600">Get results quickly without waiting for lab tests</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our technology simplifies anemia detection through a straightforward process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Image Capture</h3>
              <p className="text-gray-600">Take a clear photo of the patient's conjunctiva</p>
            </div>
            <div className="text-center animate-fade-up [animation-delay:200ms]">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analysis</h3>
              <p className="text-gray-600">Our AI processes the image using advanced algorithms</p>
            </div>
            <div className="text-center animate-fade-up [animation-delay:400ms]">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Results</h3>
              <p className="text-gray-600">Receive accurate anemia assessment instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our technology can revolutionize anemia detection in your practice
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

