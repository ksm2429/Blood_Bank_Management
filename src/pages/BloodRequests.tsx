
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowLeft, AlertTriangle, Search, Filter, Phone, Mail, MapPin, Calendar, Clock, Hospital, User } from "lucide-react";

const BloodRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [urgencyFilter, setUrgencyFilter] = useState("all");
  const [bloodTypeFilter, setBloodTypeFilter] = useState("all");

  // Mock blood request data
  const bloodRequests = [
    {
      id: "REQ001",
      patientName: "John Smith",
      bloodType: "O-",
      units: 2,
      urgency: "emergency",
      hospital: "City General Hospital",
      hospitalAddress: "123 Main St, Downtown",
      requester: "Dr. Sarah Wilson",
      requesterPhone: "+1 (555) 123-4567",
      requesterEmail: "s.wilson@citygeneral.com",
      relationship: "Doctor",
      timePosted: "30 minutes ago",
      requiredBy: "2024-03-15 18:00",
      status: "active",
      medicalReason: "Emergency surgery due to severe trauma",
      description: "Patient requires immediate blood transfusion for emergency surgery following a serious accident."
    },
    {
      id: "REQ002",
      patientName: "Maria Garcia",
      bloodType: "A+",
      units: 1,
      urgency: "urgent",
      hospital: "Metro Medical Center",
      hospitalAddress: "456 Oak Ave, Westside",
      requester: "Nurse Jennifer Lee",
      requesterPhone: "+1 (555) 987-6543",
      requesterEmail: "j.lee@metromed.com",
      relationship: "Nurse",
      timePosted: "2 hours ago",
      requiredBy: "2024-03-16 10:00",
      status: "active",
      medicalReason: "Scheduled surgery preparation",
      description: "Pre-operative blood requirement for scheduled cardiac surgery tomorrow morning."
    },
    {
      id: "REQ003",
      patientName: "Robert Johnson",
      bloodType: "B-",
      units: 3,
      urgency: "routine",
      hospital: "Community Health Center",
      hospitalAddress: "789 Pine St, Eastside",
      requester: "Dr. Michael Brown",
      requesterPhone: "+1 (555) 456-7890",
      requesterEmail: "m.brown@chc.com",
      relationship: "Doctor",
      timePosted: "4 hours ago",
      requiredBy: "2024-03-18 14:00",
      status: "active",
      medicalReason: "Cancer treatment support",
      description: "Blood transfusion needed to support ongoing chemotherapy treatment."
    },
    {
      id: "REQ004",
      patientName: "Lisa Anderson",
      bloodType: "AB+",
      units: 1,
      urgency: "urgent",
      hospital: "Regional Medical Center",
      hospitalAddress: "321 Elm St, Northside",
      requester: "Emily Davis",
      requesterPhone: "+1 (555) 654-3210",
      requesterEmail: "emily.davis@email.com",
      relationship: "Sister",
      timePosted: "6 hours ago",
      requiredBy: "2024-03-16 20:00",
      status: "matched",
      medicalReason: "Severe anemia treatment",
      description: "Patient suffering from severe anemia requires blood transfusion."
    }
  ];

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const urgencyLevels = ["emergency", "urgent", "routine"];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "emergency":
        return "bg-red-100 text-red-800 border-red-200";
      case "urgent":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "routine":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "matched":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "fulfilled":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "emergency":
        return "🚨";
      case "urgent":
        return "⚡";
      case "routine":
        return "📅";
      default:
        return "📋";
    }
  };

  const filteredRequests = bloodRequests.filter(request => {
    const matchesSearch = request.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUrgency = urgencyFilter === "all" || request.urgency === urgencyFilter;
    const matchesBloodType = bloodTypeFilter === "all" || request.bloodType === bloodTypeFilter;
    
    return matchesSearch && matchesUrgency && matchesBloodType;
  });

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
            <div className="flex items-center space-x-4">
              <Link to="/request">
                <Button className="bg-red-600 hover:bg-red-700">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Post Request
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blood Requests</h1>
          <p className="text-lg text-gray-600">
            Help save lives by responding to urgent blood donation requests
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Find Blood Requests</CardTitle>
            <CardDescription>Filter requests by urgency, blood type, or location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by patient, blood type, or hospital..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Urgency</SelectItem>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {getUrgencyIcon(level)} {level.charAt(0).toUpperCase() + level.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={bloodTypeFilter} onValueChange={setBloodTypeFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Blood Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {bloodTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredRequests.length} active request{filteredRequests.length !== 1 ? 's' : ''}
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Filter className="h-4 w-4" />
            <span>Sorted by urgency</span>
          </div>
        </div>

        {/* Request Cards */}
        <div className="space-y-6">
          {filteredRequests.map((request) => (
            <Card key={request.id} className="border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center">
                          <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Blood Needed for {request.patientName}
                          </h3>
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            Posted {request.timePosted}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={`${getUrgencyColor(request.urgency)} border`}>
                          {getUrgencyIcon(request.urgency)} {request.urgency.toUpperCase()}
                        </Badge>
                        <Badge className={`${getStatusColor(request.status)} border`}>
                          {request.status.toUpperCase()}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Blood Type Needed</span>
                          <Badge variant="outline" className="font-mono font-bold text-red-600 text-lg">
                            {request.bloodType}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Units Required</span>
                          <span className="font-semibold">{request.units} unit{request.units > 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Required By</span>
                          <div className="flex items-center text-sm">
                            <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                            {request.requiredBy}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Hospital className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">{request.hospital}</p>
                            <p className="text-sm text-gray-600">{request.hospitalAddress}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <User className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">{request.requester}</p>
                            <p className="text-sm text-gray-600">{request.relationship}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Medical Reason</h4>
                      <p className="text-sm text-gray-700 mb-2">{request.medicalReason}</p>
                      <p className="text-sm text-gray-600">{request.description}</p>
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="lg:w-64">
                    <Card className="bg-red-50 border-red-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-red-900">Ready to Help?</CardTitle>
                        <CardDescription className="text-red-700">
                          Contact the requester to coordinate donation
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Button 
                          className="w-full bg-red-600 hover:bg-red-700"
                          disabled={request.status !== 'active'}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Call {request.requester.split(' ')[0]}
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-red-300 text-red-700 hover:bg-red-100"
                          disabled={request.status !== 'active'}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </Button>
                        <div className="pt-2 border-t border-red-200 text-xs text-red-800">
                          <div className="flex items-center mb-1">
                            <Phone className="h-3 w-3 mr-1" />
                            {request.requesterPhone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {request.requesterEmail}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No blood requests found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or check back later for new requests.
            </p>
            <Link to="/request">
              <Button className="bg-red-600 hover:bg-red-700">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Post a Blood Request
              </Button>
            </Link>
          </div>
        )}

        {/* Emergency Notice */}
        <Card className="mt-8 bg-red-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Emergency Hotline</h3>
                  <p className="text-red-100">
                    For critical blood emergencies, call our 24/7 hotline
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-2xl">+1 (555) 123-BLOOD</p>
                <p className="text-red-100 text-sm">Available 24/7</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BloodRequests;
