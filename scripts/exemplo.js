        const exemploH2 = document.getElementById("exemplo-h2");
         //console.log("element ===>", element)
         exemploH2.style.color = 'blue';

         const novaH1 = document.createElement('h1');
         novaH1.textContent = "NOVO ELEMENTO H1 NA TELA";
         console.log("element ===>", novaH1)
         document.body.appendChild(novaH1);

         exemploH2.appendChild(novaH1);

         const exemploHERDER = document.getElementById("exemploHERDER");
         exemploHERDER.style.color = 'blue';

         const exemploText = document.getElementById("tamanhotext");
         exemploText.style.fontSize = '200%';

         const buttonExemploJS = document.getElementById('buttonExemploJS');
         buttonExemploJS.addEventListener('click', () => {
            alert("Enviado");
         });

         const form = document.querySelector("form");
         form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Enviadooo')
         });

          const exemploHERDER2 = document.getElementById("exemploHERDER");
          exemploHERDER2.addEventListener('mouseover', () => {
            //alert("Não pode")
          })

          document.addEventListener('keydown', (event) => {
            console.log(`Tecla clicada ${event.key}`)
            //console.log("Tecla clicada" + event.key)
            //cocsole.log("Tecla clicada", event.key)
          })




          const desafio = document.getElementById('desafio1');
         desafio.addEventListener('click', () => {
            desafio.createElement('h1')
         });


          //const desafio = document.getElementById('desafio');
          //desafio.addEventListener('click', () => {
          //alert("Teste")
         //});