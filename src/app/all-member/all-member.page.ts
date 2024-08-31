import { Component, ElementRef, OnInit, ViewChild,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
  IonSegment,
  IonIcon,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonModal,
  ModalController
} from '@ionic/angular/standalone';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import Swiper from 'swiper';

import { ModalAddNewMemberComponent } from './modal-add-new-member/modal-add-new-member.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: string[];
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-all-member',
  templateUrl: './all-member.page.html',
  styleUrls: ['./all-member.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonProgressBar,
    IonSegment,
    IonIcon,
    IonSegmentButton,
    IonSelect,
    IonModal,
    IonSelectOption,
    CommonModule,
    FormsModule,
    NgApexchartsModule,
  ],
})
export class AllMemberPage implements OnInit {
  //สมาชิกทั้งหมด
  member_all: any = [
    {
      member_type: 'Platinum',
      percent: 45,
      count_people: 510,
    },
    {
      member_type: 'Daimond',
      percent: 15,
      count_people: 300,
    },
    {
      member_type: 'Gold',
      percent: 10,
      count_people: 200,
    },
    {
      member_type: 'Silver',
      percent: 7,
      count_people: 100,
    },
    {
      member_type: 'General',
      percent: 5,
      count_people: 50,
    },
  ];
  // จัดการประเภทสมาชิก
  member_all_class: any = [
    {
      name_class: 'Platinum',
      min_point: 0,
      max_point: 1000,
      visit:1,
      is_edit:false,
    },
    {
      name_class: 'Gold',
      min_point: 1001,
      max_point: 2000,
      visit:4,
      is_edit:false,
    },
    {
      name_class: 'Diamon',
      min_point: 2001,
      max_point: 3000,
      visit:7,
      is_edit:false,
    },
    {
      name_class: 'Platinum',
      min_point: 3001,
      max_point: 0,
      visit:11,
      is_edit:false,
    },

  ];
  // แยกตามเพศ
  gender_all: any = [
    {
      gender: 'หญิง',
      gender_total: 510,
    },
    {
      gender: 'ชาย',
      gender_total: 405,
    },
    {
      gender: 'LGBT',
      gender_total: 179,
    },
    {
      gender: 'ไม่ระบุ',
      gender_total: 98,
    },
  ];
  // แบ่งตามช่วงอายุ
  divided_by_age: any = [
    {
      age: '15-18',
      count: 200,
      percent: 15,
    },
    {
      age: '19-24',
      count: 320,
      percent: 20,
    },
    {
      age: '25-35',
      count: 400,
      percent: 30,
    },
    {
      age: '36-34',
      count: 210,
      percent: 55,
    },
    {
      age: '46+',
      count: 250,
      percent: 70,
    },
  ];

  is_edit_more:boolean=false;

  select_period_number: number = 2;

  public PieOptions: Partial<ChartOptions> | any;

  public PieOptions2: Partial<ChartOptions> | any;

  swiper?: Swiper;

  member_page_arr: string[] = ['Member', 'Member Class'];

  @ViewChild('swiper') swiperRef?: ElementRef | undefined;

  select_member_page: number = 0;

  customPopoverOptionsStyle1 = {
    cssClass: 'my-custom-customPopover-select-style-1',
  };
  customPopoverOptionsStyle2 = {
    cssClass: 'my-custom-customPopover-select-style-2',
  };

  sort_by: any = '1';
  select_by: any = '1';
  isModalOpen:boolean = false;
  constructor(
    public modalController: ModalController
  ) {}

  ngOnInit() {
    // setTimeout(() => {
    //   this.openModalAddNewMember();
    // }, 1000);
    this.PieOptions = {
      series: [35, 30, 15, 10],
      chart: {
        type: 'pie',
      },
      labels: ['หญิง', 'ชาย', 'LGBT', 'ไม่ระบุ'],
      colors: [
        '#1492E6',
        '#37C839',
        '#FE8100',
        '#F8B20D',
        '#FF5555',
        '#CDCFCE',
      ],
      legend: {
        position: 'right',
        offsetY: 25,
        fontSize: '12px',
        markers: {
          offsetX: -5,
          width: 10,
          height: 10,
        },
      },
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: 200,
      //       },
      //       legend: {
      //         position: 'bottom',
      //       },
      //     },
      //   },
      // ],
    };

    this.PieOptions2 = {
      series: [510, 405, 179, 98],
      chart: {
        type: 'pie',
      },
      labels: ['หญิง', 'ชาย', 'LGBT', 'ไม่ระบุ'],
      colors: ['#FF4560', '#00E396', '#FEB019', '#008FFB'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  select_period(number_tab: number) {
    this.select_period_number = number_tab;
  }


  public select_tab_event(event: any) {
    console.log(event.detail.value);
    
    this.swiper?.enable();
    // this.select_zone = event.detail.value;
    this.swiper?.slideTo(this.select_member_page);
    this.swiper?.disable();
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;  
    this.swiper?.disable();
  }

  table_zone_pos: any[] = [
    {
      zone_id: 0,
      zone_name: 'Zone1',
      tables: [
        'A1',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'A7',
        'A8',
        'A9',
        'A10',
        'A11',
        'A12',
        'A13',
        'A14',
        'A15',
        'A16',
        'A17',
        'A18',
        'A19',
        'A20',
        'A9',
        'A10',
        'A11',
        'A12',
        'A13',
        'A14',
        'A15',
        'A16',
        'A17',
        'A18',
        'A19',
        'A20',
      ],
    },
    {
      zone_id: 1,
      zone_name: 'Zone2',
      tables: [
        'B1',
        'B2',
        'B3',
        'B4',
        'B5',
        'B6',
        'B7',
        'B8',
        'B9',
        'B10',
        'AB1',
        'B12',
        'B13',
        'B14',
        'B15',
      ],
    },
  ];

  swiperSlideCharge(event:any) {
    console.log(event);
    
    // const index = this.swiperRef?.nativeElement.swiper.activeIndex;
    // // if (this.select_group_page != index) {
    // //   this.select_group_page = index;
    // //   this.select_group(Number(index));
    // // }
  }

    // เปิด modal เรียนรู้เพิ่มเติมเกี่ยวกับระดับสมาชิก
    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
      // if (isOpen) {
      // } else {
      //   this.isModalOpen = isOpen;
      // }
    }

    //เปิด modal เพิ่มสมาชิกใหม่
    async openModalAddNewMember() {
      const modal = await this.modalController.create({
        cssClass: 'css-modal-add-new-member',
        component: ModalAddNewMemberComponent,
        backdropDismiss:false
        // componentProps: {
        //   options:options
        //   bank: bank,
        //   data: data,
        //   order_id: this.order_id,
        //   price: Math.round(this.price),
        //   print_food_bill: this.print_food_bill
        // },
      });
      await modal.present();
      const event: any = await modal.onDidDismiss();
      const date = event.data;
      // const from: CalendarResult = date.from;
      // const to: CalendarResult = date.to;
  
      console.log(event);
      
      console.log(date);
      
      if (event.role == 'save') {
        console.log(event);
        
        // this.dateFrom = date.from
        // this.dateTo = date.to
        // this.textDate2 = this.api.dateTothai(this.dateFrom, this.dateTo, 'range')
        // this.loadPerson();
      }
      // console.log(date, from, to);
    }
  
}
