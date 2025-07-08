
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Heart, ArrowLeft, Users, Activity, AlertTriangle, CheckCircle, Phone, Mail, MapPin, Clock, TrendingUp, Calendar } from "lucide-react";

const AdminDashboard = () => {
  // Mock data
  const recentRequests = [
    {
      id: "REQ001",
      patientName: "John Smith",
      bloodType: "O-",
      units: 2,
      urgency: "emergency",
      hospital: "City General Hospital",
      requester: "Dr. Sarah Wilson",
      phone: "+1 (555) 123-4567",
      status: "active",
      timeAgo: "30 min ago"
    },
    {
      id: "REQ002",
      patientName: "Maria Garcia",
      bloodType: "A+",
      units: 1,
      urgency: "urgent",
      hospital: "Metro Medical Center",
      requester: "Nurse Jennifer Lee",
      phone: "+1 (555) 987-6543",
      status: "matched",
      timeAgo: "2 hours ago"
    },
    {
      id: "REQ003",
      patientName: "Robert Johnson",
      bloodType: "B-",
      units: 3,
      urgency: "routine",
      hospital: "Community Health Center",
      requester: "Dr. Michael Brown",
      phone: "+1 (555) 456-7890",
      status: "fulfilled",
      timeAgo: "4 hours ago"
    },
  ];

  const recentDonors = [
    {
      id: "DON001",
      name: "Alice Cooper",
      bloodType: "O-",
      location: "Downtown",
      phone: "+1 (555) 111-2222",
      email: "alice@email.com",
      lastDonation: "2024-01-15",
      status: "active",
      totalDonations: 8
    },
    {
      id: "DON002",
      name: "David Wilson",
      bloodType: "A+",
      location: "Westside",
      phone: "+1 (555) 333-4444",
      email: "david@email.com",
      lastDonation: "2024-02-20",
      status: "active",
      totalDonations: 12
    },
    {
      id: "DON003",
      name: "Emma Thompson",
      bloodType: "B+",
      location: "Eastside",
      phone: "+1 (555) 555-6666",
      email: "emma@email.com",
      lastDonation: "2024-01-08",
      status: "eligible",
      totalDonations: 5
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "emergency": return "bg-red-100 text-red-800";
      case "urgent": return "bg-orange-100 text-orange-800";
      case "routine": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-blue-100 text-blue-800";
      case "matched": return "bg-yellow-100 text-yellow-800";
      case "fulfilled": return "bg-green-100 text-green-800";
      case "eligible": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
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
              <Badge className="bg-red-100 text-red-800 ml-2">Admin</Badge>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/inventory">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  View Inventory
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
            <Activity className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-lg text-gray-600">
            Monitor and manage blood bank operations in real-time
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Requests</p>
                  <p className="text-3xl font-bold text-red-600">12</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +2 from yesterday
                  </p>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Donors</p>
                  <p className="text-3xl font-bold text-blue-600">1,247</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18 this week
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Successful Matches</p>
                  <p className="text-3xl font-bold text-green-600">89</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5 today
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Response Rate</p>
                  <p className="text-3xl font-bold text-purple-600">94%</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +2% this month
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Activity className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requests">Blood Requests</TabsTrigger>
            <TabsTrigger value="donors">Donors</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="requests">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
                  Recent Blood Requests
                </CardTitle>
                <CardDescription>
                  Monitor and manage incoming blood requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request ID</TableHead>
                      <TableHead>Patient</TableHead>
                      <TableHead>Blood Type</TableHead>
                      <TableHead>Units</TableHead>
                      <TableHead>Urgency</TableHead>
                      <TableHead>Hospital</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.patientName}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-mono">
                            {request.bloodType}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.units}</TableCell>
                        <TableCell>
                          <Badge className={getUrgencyColor(request.urgency)}>
                            {request.urgency}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-32 truncate">
                          {request.hospital}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-500">
                          {request.timeAgo}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Phone className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Mail className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donors">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-blue-600" />
                  Registered Donors
                </CardTitle>
                <CardDescription>
                  Manage donor database and contact information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Donor ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Blood Type</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Last Donation</TableHead>
                      <TableHead>Total Donations</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentDonors.map((donor) => (
                      <TableRow key={donor.id}>
                        <TableCell className="font-medium">{donor.id}</TableCell>
                        <TableCell>{donor.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-mono">
                            {donor.bloodType}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                            {donor.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm">{donor.phone}</div>
                            <div className="text-xs text-gray-500">{donor.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                            {donor.lastDonation}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">
                            {donor.totalDonations}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(donor.status)}>
                            {donor.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Phone className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Mail className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Inventory Overview</CardTitle>
                <CardDescription>
                  Quick view of current blood inventory status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Inventory Details</h3>
                  <p className="text-gray-600 mb-4">
                    View detailed inventory information on the dedicated inventory page
                  </p>
                  <Link to="/inventory">
                    <Button className="bg-red-600 hover:bg-red-700">
                      View Full Inventory
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Performance metrics and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
                  <p className="text-gray-600">
                    Detailed analytics and reporting features will be available soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span>Send Alerts</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span>Contact Donors</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Activity className="h-6 w-6 text-green-600" />
                <span>Generate Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <CheckCircle className="h-6 w-6 text-purple-600" />
                <span>Update Status</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
