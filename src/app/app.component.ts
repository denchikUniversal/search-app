import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'search-app';
  searchForm: FormGroup;
  submitted = false;
  browsers = [
    {
      name: 'Chrome',
      searchLink: 'https://www.google.com/search?q='
    },
    {
      name: 'Bing',
      searchLink: 'https://www.bing.com/search?q='
    },
    {
      name: 'Ask',
      searchLink: 'https://www.ask.com/web?q='
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  get f() { return this.searchForm.controls; }

  initForm() {
    this.searchForm = this.fb.group({
      search_input: ['', Validators.required],
      search_select: ['', Validators.required],
    });
  }

  submit() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    let s = this.searchForm.value.search_input.split(' ');
    let searchText = s.join('+');
    window.open(this.searchForm.value.search_select + searchText);
  }

}
