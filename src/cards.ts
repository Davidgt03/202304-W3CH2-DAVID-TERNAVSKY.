import { Component } from './models/models';
import { characs } from './components/importCharacters';
export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return ` <ul class="characters-list row list-unstyled">

    </ul>`;
  }
}

export class Card extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<li class="character col">
        <div class="card character__card">
          <img src="./public/joffrey.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${characs[0].name}  ${characs[0].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad:${characs[0].age} </li>
                
                  Estado:
                  
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>${characs[0].age}</li>
                <li>${characs[0].series}</li>
                <li>${characs[0].speech}</li>
                <li>sword</li>
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="🗡"></i>
        </div>
      </li>`;
  }
}

export class Card2 extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<li class="character col">
        <div class="card character__card">
          <img src="./public/jaime.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${characs[1].name}  ${characs[1].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad:${characs[1].age} </li>
               
                  Estado:
                  
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>${characs[1].age}</li>
                <li>${characs[1].series}</li>
                <li>${characs[1].speech}</li>
                <li>sword</li>
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="🗡"></i>
        </div>
      </li>`;
  }
}

export class Card3 extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<li class="character col">
        <div class="card character__card">
          <img src="./public/daenerys.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${characs[2].name}  ${characs[2].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad:${characs[2].age} </li>
               
                  Estado:
                  
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>${characs[2].age}</li>
                <li>${characs[2].series}</li>
                <li>${characs[2].speech}</li>
                <li>sword</li>
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="🗡"></i>
        </div>
      </li>`;
  }
}

export class Card4 extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<li class="character col">
        <div class="card character__card">
          <img src="./public/tyrion.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${characs[3].name}  ${characs[3].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad:${characs[3].age} </li>
               
                  Estado:
                  
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>${characs[3].age}</li>
                <li>${characs[3].series}</li>
                <li>${characs[3].speech}</li>
                <li>sword</li>
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="🗡"></i>
        </div>
      </li>`;
  }
}

export class Card5 extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<li class="character col">
        <div class="card character__card">
          <img src="./public/bronn.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${characs[4].name}  ${characs[4].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad:${characs[4].age} </li>
               
                  Estado:
                  
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>${characs[4].age}</li>
                <li>${characs[4].series}</li>
                <li>${characs[4].speech}</li>
                <li>sword</li>
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="🗡"></i>
        </div>
      </li>`;
  }
}
