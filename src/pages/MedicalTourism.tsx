
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Plane, Heart, Users, Award, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

const MedicalTourism = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    age: '',
    gender: '',
    medicalCondition: '',
    treatmentType: '',
    urgency: '',
    additionalInfo: '',
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our medical team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      age: '',
      gender: '',
      medicalCondition: '',
      treatmentType: '',
      urgency: '',
      additionalInfo: '',
      agreeToTerms: false
    });
  };

  const packages = [
    {
      title: "Total Knee Replacement",
      duration: "7-10 days",
      price: "₹2,50,000",
      includes: ["Surgery", "Hospital Stay", "Physiotherapy", "Follow-up"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Aura Rejuvenation Package",
      duration: "14 days",
      price: "₹75,000",
      includes: ["Wellness Assessment", "Ayurvedic Treatments", "Yoga Sessions", "Nutrition Plan"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Cardiac Surgery",
      duration: "10-14 days",
      price: "₹3,50,000",
      includes: ["Surgery", "ICU Care", "Rehabilitation", "Cardiology Consultation"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      title: "Orthopedic Care",
      duration: "5-7 days",
      price: "₹1,50,000",
      includes: ["Consultation", "Treatment", "Physiotherapy", "Medical Reports"],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
    },
    {
      title: "Spinal Surgery",
      duration: "8-12 days",
      price: "₹4,00,000",
      includes: ["Pre-op Assessment", "Surgery", "Post-op Care", "Rehabilitation"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      title: "Cancer Treatment",
      duration: "21-30 days",
      price: "₹5,00,000",
      includes: ["Oncology Consultation", "Treatment Plan", "Chemotherapy/Radiation", "Follow-up"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "World-Class Medical Care",
      description: "Access to internationally accredited hospitals and renowned specialists"
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Dedicated patient coordinators and customized treatment plans"
    },
    {
      icon: Award,
      title: "Cost-Effective Treatment",
      description: "High-quality healthcare at significantly lower costs than Western countries"
    },
    {
      icon: Plane,
      title: "Complete Travel Support",
      description: "Visa assistance, airport transfers, accommodation, and local transport"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Medical Tourism in
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                India
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience world-class healthcare combined with the rich cultural heritage of India. 
              Our comprehensive medical tourism packages ensure quality treatment at affordable costs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose India for Medical Treatment?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Packages */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curated Treatment Packages</h2>
            <p className="text-lg text-gray-600">Comprehensive healthcare packages tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="relative h-48">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                    {pkg.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                  <div className="space-y-2 mb-6">
                    {pkg.includes.map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Inquiry Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Medical Journey</h2>
              <p className="text-lg text-gray-600">Fill out this form and our medical team will contact you within 24 hours</p>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="text-2xl text-center">Patient Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="space-y-6 pt-6 border-t">
                    <h3 className="text-lg font-semibold text-gray-900">Medical Information</h3>
                    
                    <div>
                      <Label htmlFor="medicalCondition">Medical Condition / Diagnosis *</Label>
                      <Textarea
                        id="medicalCondition"
                        value={formData.medicalCondition}
                        onChange={(e) => handleInputChange('medicalCondition', e.target.value)}
                        placeholder="Please describe your medical condition"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="treatmentType">Treatment Type *</Label>
                        <Select onValueChange={(value) => handleInputChange('treatmentType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select treatment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="orthopedic">Orthopedic Surgery</SelectItem>
                            <SelectItem value="cardiac">Cardiac Surgery</SelectItem>
                            <SelectItem value="cancer">Cancer Treatment</SelectItem>
                            <SelectItem value="neurology">Neurology</SelectItem>
                            <SelectItem value="cosmetic">Cosmetic Surgery</SelectItem>
                            <SelectItem value="wellness">Wellness/Rejuvenation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (within 1 week)</SelectItem>
                            <SelectItem value="urgent">Urgent (within 1 month)</SelectItem>
                            <SelectItem value="planned">Planned (within 3 months)</SelectItem>
                            <SelectItem value="flexible">Flexible (anytime)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        placeholder="Any additional information about your medical history, current medications, or specific requirements"
                      />
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="pt-6 border-t">
                    <div className="flex items-center space-x-2 mb-6">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the terms and conditions and privacy policy. I consent to MedAura India contacting me regarding my medical inquiry.
                      </Label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Submit Medical Inquiry
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MedicalTourism;
