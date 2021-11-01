import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {
  ITGC: any = [{
    'id': 1,
    'name': 'User Access Management'
  }, {
    'id': 2, 'name': 'Change Management'
  }, {
    'id': 3, 'name': 'Change Operations',

  },
  { 'id': 4, 'name': 'Change Management' },
  { 'id': 5, 'name': 'Project Management' },

  { 'id': 6, 'name': 'Entity-level Controls' }
  ];
TGCvalue: any = [
  {
    'id': 1,
   'content':[{
    'id': 1,
    "name":'Application',
  }, {
    'id': 2, "name":'Database',

  }, {
    'id': 3, "name":'Operationy System'

  }
  ]
  },
  {
    'id': 2,
   'content':[{
    'id': 1,
    "name":'Application',
  }, {
    'id': 2, "name":'Infrastruure',

  }
  ]
  }
  ];

  TGCCHECK: any = [
    {
      'id': 1,
     'content':[
      {
        'id': 1,
        "name":'Change management process',
      }, {
        'id': 2, "name":'Change log and review',
    
      }, {
        'id': 3, "name":'Segregation of environments'
    
      }
    //    {
    //   'id': 1,
    //   "name":'User creation and  modification',
    // }, {
    //   'id': 2, "name":'User access termination',
  
    // }, {
    //   'id': 3, "name":'High privilege Management'
  
    // },
    // {
    //   'id':4,"name":'User Review'
    // }
    ]
    },
    {
      'id': 2,
     'content':[{
      'id': 1,
      "name":'User Management',
    }, {
      'id': 2, "name":'User Review',
  
    },
    {
      'id': 2, "name":'Password and system security',
  
    }
    ]
    }
    ];
selecteditgc:any={
   'id': 0,
    'name': ''
      
};
contactForm: FormGroup;
chickForm: FormGroup;

info:any=[];
infocheck:any=[];
data:any;
constructor(private fb: FormBuilder,private check:FormBuilder) {
}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      sitgc: ["Choose Option"]
    });
    this.chickForm = this.check.group({
      chick: ["Choose Option"]
    });
    this.setDefaults();
    this.contactForm.get("sitgc").valueChanges
    .subscribe(f => {
      this.onsitgcChanged(f);
    })
    console.log(this.ITGC);
    this.chickForm.get("chick").valueChanges
    .subscribe(f => {
      this.onchangechickForm(f);
    })
  }
  setDefaults() {
    this.contactForm.get("sitgc").patchValue(null);
  }
  onsitgcChanged(value) {
    console.log('onChanged')
    console.log(value)
    this.info = this.TGCvalue.filter(e=>e.id==value)

this.data=this.info.map(e=>e.content)
console.log(this.data);
  }
  onchangechickForm(value) {
    console.log(value)
    this.infocheck = this.TGCCHECK.filter(e=>e.id==value)
console.log(this.infocheck);
  }
  // onSelect(itgc id:any){

  // }
}
