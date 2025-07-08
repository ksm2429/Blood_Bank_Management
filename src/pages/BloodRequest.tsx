
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Heart, ArrowLeft, User, Mail, Phone, MapPin, Droplet, Calendar, AlertCircle, Hospital } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BloodRequest = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    patientName: "",
    requesterName: "",
    relationship: "",
    email: "",
    phone: "",
    bloodType: "",
    unitsNeeded: "",
    urgency: "",
    hospitalName: "",
    hospitalAddress: "",
    doctorName: "",
    requiredDate: "",
    medicalReason: "",
    additionalNotes: "",
  });

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const urgencyLevels = [
    { value: "emergency", label: "Emergency (Within 24 hours)", color: "text-red-600" },
    { value: "urgent", label: "Urgent (Within 48 hours)", color: "text-orange-600" },
    { value: "routine", label: "Routine (Within 1 week)", color: "text-green-600" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Blood request data:", formData);
    
    toast({
      title: "Blood Request Submitted!",
      description: "We will notify matching donors immediately. You will receive updates via phone and email.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">BloodConnect</span>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Blood</h1>
            <p className="text-lg text-gray-600">
              Submit a blood request and we'll connect you with compatible donors in your area
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Blood Request Form</CardTitle>
              <CardDescription className="text-gray-600">
                Please provide complete information for faster donor matching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <User className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Patient Information</h3>
                  </div>
                  
                  <div>
                    <Label htmlFor="patientName">Patient Name *</Label>
                    <Input
                      id="patientName"
                      value={formData.patientName}
                      onChange={(e) => handleInputChange("patientName", e.target.value)}
                      placeholder="Enter patient's full name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bloodType">Required Blood Type *</Label>
                      <div className="relative">
                        <Droplet className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                        <Select
                          value={formData.bloodType}
                          onValueChange={(value) => handleInputChange("bloodType", value)}
                        >
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Select blood type needed" />
                          </SelectTrigger>
                          <SelectContent>
                            {bloodTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="unitsNeeded">Units Needed *</Label>
                      <Input
                        id="unitsNeeded"
                        type="number"
                        min="1"
                        max="10"
                        value={formData.unitsNeeded}
                        onChange={(e) => handleInputChange("unitsNeeded", e.target.value)}
                        placeholder="Number of units"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Urgency Level *</Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => handleInputChange("urgency", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            <span className={level.color}>{level.label}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="requiredDate">Required By Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="requiredDate"
                        type="datetime-local"
                        value={formData.requiredDate}
                        onChange={(e) => handleInputChange("requiredDate", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Requester Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <User className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Requester Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="requesterName">Your Name *</Label>
                      <Input
                        id="requesterName"
                        value={formData.requesterName}
                        onChange={(e) => handleInputChange("requesterName", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="relationship">Relationship to Patient *</Label>
                      <Input
                        id="relationship"
                        value={formData.relationship}
                        onChange={(e) => handleInputChange("relationship", e.target.value)}
                        placeholder="e.g., Father, Wife, Friend"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hospital Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Hospital className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Hospital Information</h3>
                  </div>

                  <div>
                    <Label htmlFor="hospitalName">Hospital Name *</Label>
                    <Input
                      id="hospitalName"
                      value={formData.hospitalName}
                      onChange={(e) => handleInputChange("hospitalName", e.target.value)}
                      placeholder="Name of the hospital"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="hospitalAddress">Hospital Address *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="hospitalAddress"
                        value={formData.hospitalAddress}
                        onChange={(e) => handleInputChange("hospitalAddress", e.target.value)}
                        placeholder="Complete hospital address"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="doctorName">Doctor Name (Optional)</Label>
                    <Input
                      id="doctorName"
                      value={formData.doctorName}
                      onChange={(e) => handleInputChange("doctorName", e.target.value)}
                      placeholder="Attending doctor's name"
                    />
                  </div>
                </div>

                {/* Medical Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Medical Information</h3>
                  
                  <div>
                    <Label htmlFor="medicalReason">Medical Reason for Blood Need *</Label>
                    <Textarea
                      id="medicalReason"
                      value={formData.medicalReason}
                      onChange={(e) => handleInputChange("medicalReason", e.target.value)}
                      placeholder="Briefly describe the medical condition requiring blood transfusion"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                      placeholder="Any additional information that might help donors"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div className="text-sm text-red-800">
                      <p className="font-medium mb-1">Important Notice:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>We will immediately notify all compatible donors in your area</li>
                        <li>You will receive donor contact information via phone and email</li>
                        <li>Please ensure your hospital can receive the blood donation</li>
                        <li>For emergencies, call our 24/7 hotline: +1 (555) 123-BLOOD</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-lg py-3"
                >
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Submit Blood Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BloodRequest;
