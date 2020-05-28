import { Component } from '@angular/core';
import { Song } from './model/song';
import { FormGroup, FormBuilder } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  songList: Song[] = [
     {id: 1, name:" 2 Locos", gender:"reggaeton"},
     {id: 2, name:"Rompecorazones", gender:"reggaeton"}
  ];
  selectedSong: any;
  form: FormGroup;


constructor(
  private fb: FormBuilder,
){
  console.log(this.songList)
  this.form = fb.group({
    id:[""],
    name:[""],
    gender:[""]
  })
}

openForEdit(song:Song){
  this.form.get("id").setValue(song.id);
  this.form.get("name").setValue(song.name);
  this.form.get("gender").setValue(song.gender);
}

addOrEdit(){
  if(this.form.value.id === ""){
  
    this.selectedSong = {
      id : this.songList.length +1,
      name: this.form.value.name,
      gender: this.form.value.gender
    }
      this.songList.push(this.selectedSong);
  }else{
    this.songList.map(element => {
      if(element.id === this.form.value.id ){
        element.name = this.form.value.name;
        element.gender = this.form.value.gender
      }
      return element;
    })
  }
  this.form.get("id").setValue("");
  this.form.get("name").setValue("");
  this.form.get("gender").setValue("");
}

delete(id){
  let index
  const x=  this.songList.filter((elemente , i)=> {
    if(elemente.id === id){
      index =i
    }} )

    this.songList.splice(index,1)

    this.form.get("id").setValue("");
    this.form.get("name").setValue("");
    this.form.get("gender").setValue("");
}
}
