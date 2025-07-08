
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Activity, Shield, Phone, MapPin, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">BloodConnect</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/donors" className="text-gray-600 hover:text-red-600 transition-colors">
                Find Donors
              </Link>
              <Link to="/requests" className="text-gray-600 hover:text-red-600 transition-colors">
                Blood Requests
              </Link>
              <Link to="/inventory" className="text-gray-600 hover:text-red-600 transition-colors">
                Inventory
              </Link>
              <Link to="/admin" className="text-gray-600 hover:text-red-600 transition-colors">
                Admin
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/register">
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  Register as Donor
                </Button>
              </Link>
              <Link to="/request">
                <Button className="bg-red-600 hover:bg-red-700">
                  Request Blood
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Save Lives Through
            <span className="text-red-600 block">Blood Donation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect blood donors with those in need. Our platform makes it easy to donate blood, 
            request blood, and manage blood bank inventory efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                <Heart className="mr-2 h-5 w-5" />
                Become a Donor
              </Button>
            </Link>
            <Link to="/request">
              <Button size="lg" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 text-lg px-8 py-3">
                <Activity className="mr-2 h-5 w-5" />
                Request Blood
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,250+</h3>
              <p className="text-gray-600">Registered Donors</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">850+</h3>
              <p className="text-gray-600">Lives Saved</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">45+</h3>
              <p className="text-gray-600">Partner Hospitals</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How BloodConnect Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes blood donation and requests simple and efficient
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Register as Donor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Sign up with your basic information, blood type, and contact details to join our donor network.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Get Matched</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Our system automatically matches blood requests with compatible donors in your area.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Save Lives</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Donate blood at certified centers and help save lives in your community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Blood Request?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our 24/7 emergency hotline for urgent blood requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center text-lg">
              <Phone className="mr-2 h-5 w-5" />
              <span className="font-semibold">+1 (555) 123-BLOOD</span>
            </div>
            <div className="flex items-center text-lg">
              <MapPin className="mr-2 h-5 w-5" />
              <span>Available in 25+ Cities</span>
            </div>
            <div className="flex items-center text-lg">
              <Clock className="mr-2 h-5 w-5" />
              <span>24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold">BloodConnect</span>
              </div>
              <p className="text-gray-400">
                Connecting blood donors with those in need to save lives across communities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/donors" className="hover:text-white transition-colors">Find Donors</Link></li>
                <li><Link to="/requests" className="hover:text-white transition-colors">Blood Requests</Link></li>
                <li><Link to="/inventory" className="hover:text-white transition-colors">Inventory</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Emergency</h3>
              <p className="text-gray-400 mb-2">24/7 Hotline</p>
              <p className="text-red-400 font-semibold text-lg">+1 (555) 123-BLOOD</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BloodConnect. All rights reserved. Saving lives, one donation at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
