var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  var addThree = input.slice(0,3)
  var dot = input.indexOf(';')
  var name = input.slice(dot + 1);
  var result = addThree + ';' + name;
  
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
