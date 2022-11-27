
// <script type="text/javascript" src="index.js" defer></script> sur le fichier html

//Accesseurs de l element
element.children;                                                       //retourne la liste des enfants de cet element
element.parentElement;                                                  //retourne l element parent de celui-ci 
element.nextElementSibling;                                             //retourne l element suivant de meme niveau
element.previousElementSibling;                                         //retourne l element precedent de meme niveau
element.children ("element_id");                                        //comme .children mais ayant pour id 
element.parentElement ("element_id");                                   //comme .parentElement mais ayant pour id 
element.nextElementSibling ("element_id");                              //comme .nextElementSibling mais ayant pour id 
element.previousElementSibling ("element_id");                          //comme .previousElementSibling mais ayant pour id 

//Pour afficher
console.log("coucou");                                                  //Pour afficher ce qu'on veut dans la console
element.outerHTML                                                       //Traduit l element en texte lisible


//Pour modifier directement le contenu d un element
element.innerHTML;                                                      //Contenu html de l element                                        
element.textContent;                                                    //Contenu string de l element

//Pour modifier les classes de l element
element.classList.add("element_id", "element2_id");
element.classList.remove("element_id", "element2_id");
element.classList.replace("old_element_id", "new_element_id");
element.classList.contains("element_id");

//Modifier le style css
element.style.propriete_css = '#000';                                   //Permet de modifier une propriete css (.style a une propriete pour chaque style css existant)

//Modifier les attributs
element.getAttribute("attribut")    
element.setAttribute("src", "image.png");
element.removeAttribute("attribut");

//Manipuler des elements
//element est un arbre. Il peut etre une feuille ou bien un noeud que l'on peut manipuler a l'aide des methodes suivantes
const element = document.getElementById('element_id');                  //Recupere l element precis correspondants a l ID en parametre
const elements = document.getElementsByClassName('elements_class');     //Recupere un tableau des elements correspondants a la classe en parametre
const elements = document.getElementsByTagName('elements_tag');         //Recupere un tableau des elements correspondants a la balise en parametre
const elements = document.querySelector("#myId p.article > a");         //Recupere un tableau des elements correspondants a la requete en parametre. Ici : recherche dans l'élément ayant pour id  #myId , les éléments de type  <p>  qui ont pour classe  article , afin de récupérer le lien (  <a>  ) qui est un enfant direct (pas des enfants de ses enfants).
newElement = document.createElement("div");                             //Cree un nouvel element orphelin
elementParent.appendChild(newElement);                                  //Assigne l element a un parent
elementParent.removeChild(element);       
elementParent.replaceChild(element, newElement);


element.addEventListener("event", "fonctionCallback()");                //Ecoute un evenement ("click", "mousemove", "mouseevent"...) et lance la fonction lorsqu il a lieu
element.preventDefault();                                               //Retire le comportement par default de l element
element.stopPropagation();                                              //Empeche le signal d un element de remonter a son parent