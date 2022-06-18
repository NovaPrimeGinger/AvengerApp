var app = new function() {
    this.el = document.getElementById('heroes');
  
    this.heroes = ['Iron Man', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Captain America', 'Doctor Strange', 'Spider-Man', 'Black Panther', 'Ant-Man', 'The Wasp', 'Captain Marvel', 'Scarlet Witch', 'Vision', 'Falcon', 'Winter Soldier', 'War-Machine'];
  
    
    this.HeroesCount = function(data) {
      var el   = document.getElementById('counter');
      var name = 'hero';
  
      if (data) {
        if (data > 1) {
          name = 'heroes';
        }
        el.innerHTML = data + ' ' + name ;
      } else {
        el.innerHTML = 'No ' + name;
      }
    };
    
    this.GetAllHeroes = function() {
      var data = '';
  
      if (this.heroes.length > 0) {
        for (i = 0; i < this.heroes.length; i++) {
          data += '<tr>';
          data += '<td>' + this.heroes[i] + '</td>';
          data += '<td><button onclick="app.UpdateHero(' + i + ')">Update</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.HeroesCount(this.heroes.length);
      return this.el.innerHTML = data;
    };
  
    this.AddHero = function () {
      el = document.getElementById('add-name');
      // Get the value
      var hero = el.value;
  
      if (hero) {
        // AddHero the new value
        this.heroes.push(hero.trim());
        // Reset input value
        el.value = '';
        // Dislay the new list
        this.GetAllHeroes();
      }
    };
  
    this.UpdateHero = function (item) {
        var el = document.getElementById('update-name');
        // Display value in the field
        el.value = this.heroes[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
    
        document.getElementById('saveUpdate').onsubmit = function() {
          // Get value
          var hero = el.value;
    
          if (hero) {
            // Edit value
            self.heroes.splice(item, 1, hero.trim());
            // Display the new list
            self.GetAllHeroes();
            // Hide fields
            CloseInput();
          }
        }
      };
  
    this.Delete = function (item) {
      // Delete the current row
      this.heroes.splice(item, 1);
      // Display the new list
      this.GetAllHeroes();
    };



}
  
app.GetAllHeroes();


  
function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}