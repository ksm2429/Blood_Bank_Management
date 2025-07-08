
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, ArrowLeft, Droplet, Search, Filter, Plus, AlertTriangle, CheckCircle, TrendingUp, TrendingDown } from "lucide-react";

const BloodInventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Mock inventory data
  const inventoryData = [
    { bloodType: "A+", units: 45, capacity: 50, expiringSoon: 3, status: "good" },
    { bloodType: "A-", units: 18, capacity: 30, expiringSoon: 1, status: "low" },
    { bloodType: "B+", units: 32, capacity: 40, expiringSoon: 2, status: "good" },
    { bloodType: "B-", units: 8, capacity: 25, expiringSoon: 0, status: "critical" },
    { bloodType: "AB+", units: 22, capacity: 30, expiringSoon: 1, status: "good" },
    { bloodType: "AB-", units: 5, capacity: 20, expiringSoon: 1, status: "critical" },
    { bloodType: "O+", units: 38, capacity: 60, expiringSoon: 4, status: "low" },
    { bloodType: "O-", units: 12, capacity: 40, expiringSoon: 2, status: "critical" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "text-green-600 bg-green-100";
      case "low": return "text-yellow-600 bg-yellow-100";
      case "critical": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good": return CheckCircle;
      case "low": return TrendingDown;
      case "critical": return AlertTriangle;
      default: return CheckCircle;
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 70) return "bg-green-500";
    if (percentage >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  const filteredInventory = inventoryData.filter(item => {
    const matchesSearch = item.bloodType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || item.status === filterType;
    return matchesSearch && matchesFilter;
  });

  const totalUnits = inventoryData.reduce((sum, item) => sum + item.units, 0);
  const totalCapacity = inventoryData.reduce((sum, item) => sum + item.capacity, 0);
  const criticalTypes = inventoryData.filter(item => item.status === "critical").length;
  const expiringSoon = inventoryData.reduce((sum, item) => sum + item.expiringSoon, 0);

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
              <Link to="/admin">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  Admin Dashboard
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
            <Droplet className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blood Inventory</h1>
          <p className="text-lg text-gray-600">
            Real-time blood bank inventory management and monitoring
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Units</p>
                  <p className="text-3xl font-bold text-gray-900">{totalUnits}</p>
                  <p className="text-xs text-gray-500">of {totalCapacity} capacity</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Droplet className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Critical Types</p>
                  <p className="text-3xl font-bold text-red-600">{criticalTypes}</p>
                  <p className="text-xs text-gray-500">need immediate attention</p>
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
                  <p className="text-sm text-gray-600 mb-1">Expiring Soon</p>
                  <p className="text-3xl font-bold text-orange-600">{expiringSoon}</p>
                  <p className="text-xs text-gray-500">units in 7 days</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Fill Rate</p>
                  <p className="text-3xl font-bold text-green-600">{Math.round((totalUnits/totalCapacity)*100)}%</p>
                  <p className="text-xs text-gray-500">overall capacity</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Inventory Management</CardTitle>
            <CardDescription>Search and filter blood inventory by type and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search blood type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-40">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Stock
                </Button>
              </div>
            </div>

            {/* Inventory Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredInventory.map((item) => {
                const percentage = (item.units / item.capacity) * 100;
                const StatusIcon = getStatusIcon(item.status);
                
                return (
                  <Card key={item.bloodType} className="border border-gray-200 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="bg-red-100 p-2 rounded-full">
                            <Droplet className="h-5 w-5 text-red-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{item.bloodType}</h3>
                        </div>
                        <Badge className={`${getStatusColor(item.status)} border-0`}>
                          <StatusIcon className="mr-1 h-3 w-3" />
                          {item.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Available Units</span>
                          <span className="font-semibold">{item.units} / {item.capacity}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <Progress 
                            value={percentage} 
                            className="h-2"
                          />
                          <p className="text-xs text-gray-500 text-center">
                            {percentage.toFixed(1)}% capacity
                          </p>
                        </div>
                        
                        {item.expiringSoon > 0 && (
                          <div className="bg-orange-50 border border-orange-200 rounded p-2">
                            <p className="text-xs text-orange-800">
                              <AlertTriangle className="inline h-3 w-3 mr-1" />
                              {item.expiringSoon} units expiring in 7 days
                            </p>
                          </div>
                        )}
                        
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" variant="outline" className="flex-1 text-xs">
                            Update Stock
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 text-xs">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredInventory.length === 0 && (
              <div className="text-center py-12">
                <Droplet className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No inventory found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common inventory management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Plus className="h-6 w-6" />
                <span>Add New Stock</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <AlertTriangle className="h-6 w-6" />
                <span>Alert Donors</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <TrendingUp className="h-6 w-6" />
                <span>Generate Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Search className="h-6 w-6" />
                <span>Find Donors</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BloodInventory;
