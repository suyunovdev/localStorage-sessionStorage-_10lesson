// 1. HTML'da h1, button va input elementlari mavjud. Inputga biror qiymat kiritib, button'ni bosganda, inputni qiymati h1'ning text'i bolib qolishi kerak


//                     function updateH1() {
//                         let result = document.getElementById('textInput').value;
//                         document.getElementById('output').innerText = result;
//                     }



// 2. Array'da mevalar nomi mavjud. Ulardan JS orqalik ul>li yasang.
// const fruits = ["apple", "orange", "banana", "grapes"];



                        // const fruits = ["apple", "orange", "banana", "grapes"];

                        // const ul = document.getElementById('fruitsList');

                        // fruits.forEach(fruit => {
                        //     const li = document.createElement('li');
                        //     li.textContent = fruit;
                        //     ul.appendChild(li);
                        // });




// 3. HTML'da paragraph va button mavjud. Button'ni bosganda paragraph'ni rangi, orqa foni(background) va hamda font-size'ini ozgartiring



                        // function changeStyle() {
                        //     var paragraph = document.getElementById('paragraph');
                        //     paragraph.style.color = getRandomColor();
                        //     paragraph.style.backgroundColor = getRandomColor();
                        //     paragraph.style.fontSize = getRandomFontSize() + 'px';
                        // }
                
                        // function getRandomColor() {
                        //     var letters = '0123456789ABCDEF';
                        //     var color = '#';
                        //     for (var i = 0; i < 6; i++) {
                        //         color += letters[Math.floor(Math.random() * 14)];
                        //     }
                        //     return color;
                        // }
                
                        // function getRandomFontSize() {
                        //     return Math.floor(Math.random() * 40) + 12; // Font size between 12px and 42px
                        // }




// 4. HTML'da <div class="container"></div> elementi va 2 ta button mavjud. 1ta button'ni bosganda html'da <p> elementi yaratiladi. Uning ichiga, ozingiz istagan text content beriladi va <p> ni <div> element ichiga joylashtiriladi. 2-buttoni bosganda, <p> elementi ochirib yuboriladi.




                    // function createParagraph() {
                    //     let container = document.querySelector('.container');
                    //     let text = prompt("Iltimos biron bir matn kiriting: ");
                    //     if (text !== null && text.trim() !== '') {
                    //         let p = document.createElement('p');
                    //         p.textContent = text;
                    //         container.appendChild(p);
                    //     }
                    // }

                    // function removeParagraph() {
                    //     let container = document.querySelector('.container');
                    //     let p = container.querySelector('p');
                    //     if (p) {
                    //         container.removeChild(p);
                    //     } else {
                    //         alert("Matn kiritilmagan !");
                    //     }
                    // }




// 5. HTML'da img va button elementi bor. Button'ni bosganda agar <img /> elementi korinib turgan bolsa, korinmay qoladi. Aksincha agar korinmay turgan bolsa, korinib qoladi. Rasm korinib turgan xolatda button'ni text "Yashirish", agar rasm korinmay turgan bolsa button'ni text'i "Korsatish" bolib turadi.




                    // function toggleImage() {
                    //     let image = document.getElementById('image');
                    //     let button = event.target;
            
                    //     if (image.style.display === 'none') {
                    //         image.style.display = 'block';
                    //         button.textContent = 'Yashirish';
                    //     } else {
                    //         image.style.display = 'none';
                    //         button.textContent = 'Korsatish';
                    //     }
                    // }




// 6. HTML'da button'lar va div elementlari mavjud. Div'ning ichidagi text 0(nol)ga teng. Button'ni xar bosganda 0 ning qiymati 1tadan oshib boradi. 2-button'ni bosganda <div> ning qiymati qaytadan 0 bolib qoladi


                    // let counterValue = 0; 

                    // function increment() {
                    //     counterValue++; 
                    //     updateCounter(); 
                    // }
            
                    // function reset() {
                    //     counterValue = 0; 
                    //     updateCounter(); 
                    // }
            
                    // function updateCounter() {
                    //     let counter = document.getElementById('counter');
                    //     counter.textContent = counterValue; 
                    // }






