
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions about our anemia detection technology? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you're interested in learning more about our technology, exploring potential collaborations,
                or providing feedback, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MailIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-700">info@anemiadetect.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-700">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-700">
                      University Research Lab<br />
                      123 Campus Drive<br />
                      College Town, ST 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">How accurate is your anemia detection system?</h3>
              <p className="text-gray-700">
                Our system has been validated to detect moderate to severe anemia with a sensitivity of 92% and 
                specificity of 88%, with a mean absolute error of ±0.8 g/dL for hemoglobin estimation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Is this technology available for commercial use?</h3>
              <p className="text-gray-700">
                Currently, our system is in the research and development phase. We're exploring partnerships for 
                clinical validation and eventual deployment in healthcare settings.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I participate in your research studies?</h3>
              <p className="text-gray-700">
                We periodically recruit participants for validation studies. Please contact us if you're interested 
                in contributing to this research.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How does your technology compare to traditional methods?</h3>
              <p className="text-gray-700">
                While traditional methods like complete blood count remain the gold standard, our technology offers 
                a non-invasive, accessible alternative that can be particularly valuable in resource-limited settings 
                or for preliminary screening.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
