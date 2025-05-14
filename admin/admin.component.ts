import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Car {
  name: string;
  image: string;
  model: string;
  type: 'basic' | 'mid-range' | 'high-end';
  userDistance?: number;
  rentalDays?: number;
  pricePerKm:number;
  discount:number;
  perDayCost:number;
  details: string;
  gearType: 'manual' | 'automatic';
  isFrequentRenter?: boolean;
  loyaltyPoints?: number;
  extraDiscountRides?: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  constructor( private router: Router) {}

  // ngOnInit() {
  //   // Check if the admin is authenticated
  //     this.router.navigate(['/login']); // Redirect to login if not authenticated
  // }

  // Navigate to different sections
   currentPage: string = '';

  // Function to set the current page
  setPage(page: string): void {
    this.currentPage = page;
  }
  cars: Car[] = [
        { name: 'Car 1', image: './assets/suv6.jfif', model: 'Model 1', type: 'basic',pricePerKm: 10,discount: 20, perDayCost: 500, details: 'Economical and fuel-efficient', gearType: 'manual', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 2', image: './assets/suv1.jfif', model: 'Model 2', type: 'mid-range',pricePerKm: 12,discount: 20, perDayCost: 500,  details: 'Comfortable and spacious', gearType: 'automatic', isFrequentRenter: false, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 3', image: './assets/suv2.jfif', model: 'Model 3', type: 'high-end',pricePerKm: 11,discount: 20, perDayCost: 500, details: 'Luxury and high performance', gearType: 'automatic', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 4', image: './assets/suv3.jfif', model: 'Model 4', type: 'basic',pricePerKm: 10,discount: 20, perDayCost: 500,  details: 'Economical and fuel-efficient', gearType: 'automatic', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 5', image: './assets/suv4.jfif', model: 'Model 1', type: 'mid-range',pricePerKm: 13,discount: 20, perDayCost: 500, details: 'Comfortable and spacious', gearType: 'manual', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 6', image: './assets/suv5.jfif', model: 'Model 3', type: 'high-end',pricePerKm: 14,discount: 20, perDayCost: 500, details: 'Luxury and high performance', gearType: 'manual', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 }
      ];
  updateCar(carName: string): void {
    alert(`Update functionality for ${carName} is not implemented yet.`);
  }

  deleteCar(carName: string): void {
    alert(`Delete functionality for ${carName} is not implemented yet.`);
  }
}