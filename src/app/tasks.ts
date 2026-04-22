import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  constructor(private router: Router){

  }
  seriveTopic = new BehaviorSubject<any>(null);
  interior  = {
    describe: "Our interior construction services create comfortable, stylish, and functional living spaces tailored to your needs. From renovations to complete transformations, we combine thoughtful design with quality craftsmanship. Every detail is handled with precision to match your vision. Visit our gallery to explore our interior work and designs.",
    list: [ 
    'assets/images/Media_1.jpeg',
    'assets/images/Media_2.jpeg',
    'assets/images/Media_3.jpeg',
    'assets/images/Media_9.jpeg',
    'assets/images/Media_10.jpeg',
    'assets/images/Media_11.jpeg',
    'assets/images/Media_12.jpeg',
    'assets/images/interiorandbase1.1.jpeg',
    'assets/images/interiorandbase1.2.jpeg',
    'assets/images/interiorandbase1.3.jpeg',
    'assets/images/interiorandbase1.4.jpeg',
    'assets/images/interiorandbase1.5.jpeg',
    'assets/images/interiorandbase1.6.jpeg',
    'assets/images/interiorandbase1.7.jpeg',
    'assets/images/interior1.1.jpeg',
    'assets/images/interior1.2.jpeg',
    'assets/images/interior1.3.jpeg',
    'assets/images/interior1.4.jpeg',
    'assets/images/interior1.5.jpeg',
    'assets/images/interior1.6.jpeg',
    'assets/images/interior1.7.jpeg',
   ],
   subtypes: ["Basement renovation","Full home renovation","Washroom renovation","Media walls","Accent walls","3D walls"]
  };

   exterior = {
    describe: "We deliver high-quality exterior construction services that enhance curb appeal and structural strength. From facades to outdoor finishes and structural improvements, our work is built to last. We focus on durability, design, and weather resistance. Check out our gallery to see our exterior projects in action.",
    list:[
     'assets/images/concrete_1.jpeg',
    'assets/images/concrete_2.jpeg',

    'assets/images/concrete_3.jpeg',

    'assets/images/concrete_4.jpeg',
    'assets/images/Deck_1.jpeg',
    'assets/images/Deck_2.jpeg',
    'assets/images/Deck_3.jpeg',
    'assets/images/Deck_4.jpeg',
    'assets/images/Deck_5.jpeg',
    'assets/images/Deck_6.jpeg',
    'assets/images/Deck_7.jpeg',
    'assets/images/Deck_8.jpeg',
    'assets/images/Deck_9.jpeg',
    'assets/images/Deck_10.jpeg',
    'assets/images/Deck_11.jpeg',
    'assets/images/Deck_12.jpeg',
    'assets/images/Fence_1.jpeg',
    'assets/images/Fence_2.jpeg',
    'assets/images/Fence_3.jpeg',
    'assets/images/Fence_4.jpeg',
    'assets/images/Fence_5.jpeg',
    'assets/images/Fence_6.jpeg',
    'assets/images/Fence_7.jpeg',
    'assets/images/Fence_8.jpeg',
    'assets/images/Fence_9.jpeg'
   ],
   subtypes: ["Concrete","Fence","Deck","Fence","Landscaping","Full garage package","Siding","Hardie","Lux panels"]
  }

   concrete= {
    describe: "We provide high-quality concrete solutions for residential and commercial projects, including driveways, patios, and foundations. Our team ensures durability, precision, and a flawless finish using advanced techniques and materials. Every project is completed with care and attention to detail. Explore our gallery to see our completed concrete work.",
    list:[
        'assets/images/concrete_1.jpeg',
    'assets/images/concrete_2.jpeg',

    'assets/images/concrete_3.jpeg',

    'assets/images/concrete_4.jpeg',
    'assets/images/concrete_1.1.jpeg',
    'assets/images/concrete_1.2.jpeg',

    'assets/images/concrete_1.3.jpeg',

    'assets/images/concrete_1.4.jpeg',
    'assets/images/concrete_1.5.jpeg',
    'assets/images/concrete_1.6.jpeg',
    'assets/images/concrete_1.7.jpeg',
    'assets/images/concrete_1.8.jpeg',
    'assets/images/concrete_1.9.jpeg',
    'assets/images/concrete_1.10.jpeg',
    'assets/images/concrete_1.11.jpeg',
    'assets/images/concrete_1.12.jpeg',
    'assets/images/concrete_1.13.jpeg',
   ]
  }

    basement= {
    describe: "We specialize in constructing strong, well-designed basements that add valuable space and functionality to your property. From structural foundations to waterproofing and ventilation, we ensure safety, durability, and comfort. Whether for storage, living, or parking, we deliver reliable results. Browse our gallery to view our basement projects.",
    list:[
    'assets/images/interiorandbase1.1.jpeg',
    'assets/images/interiorandbase1.2.jpeg',
    'assets/images/interiorandbase1.3.jpeg',
    'assets/images/interiorandbase1.4.jpeg',
    'assets/images/interiorandbase1.5.jpeg',
    'assets/images/interiorandbase1.6.jpeg',
    'assets/images/interiorandbase1.7.jpeg',
   ]
  }

   getlist(): Observable<any> {
    return new Observable((observer) =>{
      this.seriveTopic.pipe()
       this.seriveTopic.subscribe((data)=>{
        if(data){
        if(data.title != "" || data.title != undefined){
      const serviceData = {
        title: data.title,
        list: (this as any)[data.list]
      }
      observer.next(serviceData);
    } else {
      observer.next(false);
        }
  } else {
    this.router.navigate(['/']);
  }
    });
      
    })
   }

   setTopic(title: string, topic: string){
    this.seriveTopic.unsubscribe();
    this.seriveTopic =new BehaviorSubject<any>(null);
    if(title != ""){
    const obj = {
      title: title,
      list: topic
    }
    this.seriveTopic.next(obj);
  } else {
     this.seriveTopic.next(null);
  }
   }
}
