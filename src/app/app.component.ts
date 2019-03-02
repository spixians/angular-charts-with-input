import { Component , OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms'
import * as CanvasJS from './canvasjs.min';
import { DemandClass, PostDemandClass } from './classes/demand-class'
import { DemandService } from './services/demand.service'
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('f') placeorder : NgForm

  constructor(
    private DemandService : DemandService,
    // private PostDemandClass : PostDemandClass
  ){
   
  }
  rdata : Array<{ y: number , label:string }> = []

	ngOnInit() {
  // chart.render();
    }

    

   
    

    onSubmit(){
      var d= new PostDemandClass()
      // console.log(typeof this.placeorder.value.year )
      d.input=this.placeorder.value.year;

      this.DemandService.postDemand(d)
    .subscribe(
      data=>{
          // console.log(data)
          this.rdata=[]
          for(let d in data){
            console.log(data[d].SaleFigure , data[d].Month )
            this.rdata.push({ y: data[d].SaleFigure , label : data[d].Month })
          }
          console.log("hi")

          let chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: "Demand forecast"
            },
            data: [{
              type: "column",
              dataPoints: this.rdata
        
            }]
          });

          chart.render();
      }
    )
    }

    setYear(event: any ){
      event.target.value
    }
}