import { Component, OnInit } from '@angular/core';
import { CrawlerService } from '../services/crawler.services';

@Component({
  selector: 'app-crawler',
  templateUrl: './crawler.component.html',
  styleUrls: ['./crawler.component.scss']
})
export class CrawlerComponent implements OnInit {
  crawler: any[] = [];
  constructor(
    private crawlerService: CrawlerService
  ) { }

  ngOnInit() {
    this.crawlerService.getCrawler().subscribe(crawler => {
      this.crawler = crawler;
    })
  }

}
