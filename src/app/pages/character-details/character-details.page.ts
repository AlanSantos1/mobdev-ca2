<<<<<<< HEAD:src/app/pages/character-details/character-details.page.ts
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../services/api.service
>>>>>>> eea6d4c3621336851d05c94984c29c9c6af87a89:mobdev-ca2/src/app/pages/character-details/character-details.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
    character: any;
  characterId = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCharacter(this.characterId).subscribe(res => {
      this.character= res[0];
    })
 }
}