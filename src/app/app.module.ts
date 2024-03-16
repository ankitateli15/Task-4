import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartModule } from 'primeng/chart';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@NgModule({
    declarations: 
    [AppComponent,
    
   

   
  
     
        
   
        
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule ,
        ReactiveFormsModule ,
        HttpClientModule,
        NgApexchartsModule,
        ChartModule
        
        


        

        
        
    
    
      
     
        
        
    ],
    exports: [
        
    ],
    providers: [
        
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    
}




