
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowLeft, Users, Search, Filter, Phone, Mail, MapPin, Calendar, Star } from "lucide-react";

const DonorSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodTypeFilter, setBloodTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  // Mock donor data
  const donors = [
    {
      id: "DON001",
      name: "Alice Cooper",
      bloodType: "O-",
      location: "Downtown",
      distance: "2.5 km",
      phone: "+1 (555) 111-2222",
      email: "alice@email.com",
      lastDonation: "2024-01-15",
      totalDonations: 8,
      rating: 5,
      available: true,
      verified: true
    },
    {
      id: "DON002",
      name: "David Wilson",
      bloodType: "A+",
      location: "Westside",
      distance: "4.1 km",
      phone: "+1 (555) 333-4444",
      email: "david@email.com",
      lastDonation: "2024-02-20",
      totalDonations: 12,
      rating: 5,
      available: true,
      verified: true
    },
    {
      id: "DON003",
      name: "Emma Thompson",
      bloodType: "B+",
      location: "Eastside",
      distance: "3.8 km",
      phone: "+1 (555) 555-6666",
      email: "emma@email.com",
      lastDonation: "2024-01-08",
      totalDonations: 5,
      rating: 4,
      available: false,
      verified: true
    },
    {
      id: "DON004",
      name: "Michael Brown",
      bloodType: "O+",
      location: "Northside",
      distance: "5.2 km",
      phone: "+1 (555) 777-8888",
      email: "michael@email.com",
      lastDonation: "2024-03-01",
      totalDonations: 15,
      rating: 5,
      available: true,
      verified: true
    },
    {
      id: "DON005",
      name: "Sarah Johnson",
      bloodType: "AB-",
      location: "Downtown",
      distance: "1.8 km",
      phone: "+1 (555) 999-0000",
      email: "sarah@email.com",
      lastDonation: "2024-02-10",
      totalDonations: 6,
      rating: 4,
      available: true,
      verified: false
    },
    {
      id: "DON006",
      name: "Robert Davis",
      bloodType: "B-",
      location: "Southside",
      distance: "6.7 km",
      phone: "+1 (555) 222-3333",
      email: "robert@email.com",
      lastDonation: "2024-01-25",
      totalDonations: 9,
      rating: 5,
      available: true,
      verified: true
    }
  ];

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const locations = ["Downtown", "Westside", "Eastside", "Northside", "Southside"];

  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodType = bloodTypeFilter === "all" || donor.bloodType === bloodTypeFilter;
    const matchesLocation = locationFilter === "all" || donor.location === locationFilter;
    
    return matchesSearch && matchesBloodType && matchesLocation;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
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
            <div className="flex items-center space-x-4">
              <Link to="/register">
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  Register as Donor
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
            <Users className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Blood Donors</h1>
          <p className="text-lg text-gray-600">
            Search and connect with verified blood donors in your area
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Search Donors</CardTitle>
            <CardDescription>Use filters to find the right donors for your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name or blood type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
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
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
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
            Found {filteredDonors.length} donors
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Filter className="h-4 w-4" />
            <span>Sorted by proximity</span>
          </div>
        </div>

        {/* Donor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.map((donor) => (
            <Card key={donor.id} className="border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 flex items-center">
                        {donor.name}
                        {donor.verified && (
                          <Badge className="ml-2 bg-green-100 text-green-800 text-xs">
                            Verified
                          </Badge>
                        )}
                      </h3>
                      <div className="flex items-center mt-1">
                        {renderStars(donor.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          ({donor.totalDonations} donations)
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    className={`${donor.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                    } border-0`}
                  >
                    {donor.available ? 'Available' : 'Unavailable'}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Blood Type</span>
                    <Badge variant="outline" className="font-mono font-bold text-red-600">
                      {donor.bloodType}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Location</span>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                      {donor.location} ({donor.distance})
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Donation</span>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                      {donor.lastDonation}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-red-600 hover:bg-red-700"
                        disabled={!donor.available}
                      >
                        <Phone className="mr-2 h-3 w-3" />
                        Call
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        disabled={!donor.available}
                      >
                        <Mail className="mr-2 h-3 w-3" />
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDonors.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No donors found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or expanding your location range.
            </p>
            <Link to="/register">
              <Button className="bg-red-600 hover:bg-red-700">
                <Heart className="mr-2 h-4 w-4" />
                Register as a Donor
              </Button>
            </Link>
          </div>
        )}

        {/* Emergency Notice */}
        <Card className="mt-8 bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-1">Emergency Blood Need?</h3>
                <p className="text-red-800 mb-2">
                  For urgent blood requirements, call our 24/7 emergency hotline
                </p>
                <p className="text-red-600 font-bold text-lg">+1 (555) 123-BLOOD</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorSearch;
