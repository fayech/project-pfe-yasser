import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.sass']
})
export class ViewsComponent implements OnInit {
  // apidata: any = [{"brand":"VOLKSWAGEN",
  // "model":"GOLF 7",
  // "carrosserie":"berline",
  // "energie":"essence",
  // "couleur":"noir",
  // "transmission":"traction",
  // "boite":"manuelle",
  // "age":"2015",
  // "kilometrage":"93000",
  // "puissance":"7"}
  // ];
  constructor(
    ) { }

  ngOnInit(): void {
  }
//   download(){
//     //  var filename = this.attachmentList[index].uploadname;
//     var index="assets/file/cv_mehdi.pdf"
//     var file = new File(["Hello, world!"], index, {type: "text/plain;charset=utf-8"});
//     saveAs(file);
//     var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
//     saveAs(blob, "hello world.txt");
//       //     saveAs(data, filename),
    
// }
// downloadPdf(pdfUrl: string, pdfName: string ) {
//   //const pdfUrl = './assets/sample.pdf';
//   //const pdfName = 'your_pdf_file';
//   saveAs(pdfUrl, pdfName);
// }


// apitest(){
//   this.apoiervice.test(this.apidata)
//   .subscribe(data =>{
//     console.log("alllproduits",data);
    
//   });

// }

}
