<<<<<<< HEAD:src/app/pages/quote-details/quote-details.page.ts
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../services/api.service
>>>>>>> eea6d4c3621336851d05c94984c29c9c6af87a89:mobdev-ca2/src/app/pages/quote-details/quote-details.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
  quote: any;
  quoteId = null;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

   ngOnInit() {
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getQuote(this.quoteId).subscribe(res => {
      this.quote= res[0];
    })
 }
}
