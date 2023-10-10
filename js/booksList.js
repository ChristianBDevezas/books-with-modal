const booksList = [
    {
        id: 1,
        img: "img/books/1 - Global Challenges of Climate Change.jpg",
        alt: "Tessaleno Devezas - Global Challenges of Climate Change, Vol.1",
        text: "T. Devezas, J. Leitão, J. Yegorov, D. Chistilin, Global Challenges of Climate Change: Green Energy, Decarbonization, Forecasting the Green Transition, Springer, Heidelberg, Germany, November 2022.",
        summary: "Global Challenges of Climate Change, Vol.1"
    },
    {
        id: 2,
        img: "img/books/2 - Global Challenges of Climate Change.jpg",
        alt: "Tessaleno Devezas - Global Challenges of Climate Change, Vol.2",
        text: "T. Devezas, J. Leitão, J. Yegorov, D. Chistilin, Global Challenges of Climate Change: Green Energy, Decarbonization, Forecasting the Green Transition, Springer, Heidelberg, Germany, November 2022.",
        summary: "Global Challenges of Climate Change, Vol.2"
    },
    {
        id: 3,
        img: "img/books/3 - Development of Northern Sea Route and the Artic Maritime Logistics.jpg",
        alt: "Tessaleno Devezas - Development of Northern Sea Route and the Artic Maritime Logistics",
        text: "I. Ilin, T. Devezas, C. Jahn, Development of Northern Sea Route and the Artic Maritime Logistics, Springer, Heidelberg, Germany, March 2022.",
        summary: "Northern Sea Route and the Artic Maritime Logistics"
    },
    {
        id: 4,
        img: "img/books/4 - Digital Transformation and the World Economy.jpg",
        alt: "Tessaleno Devezas - Digital Transformation and the World Economy",
        text: "A. Akaev, T. Devezas, A. Rudskoy (Eds.), Digital Transformation and the World Economy: Critical Factors and Sector-Focused Mathematical Models, Springer, Heidelberg, Germany, January 2022.",
        summary: "Digital Transformation and the World Economy"
    },
    {
        id: 5,
        img: "img/books/5 - The Economics of Digital Transformation.jpg",
        alt: "Tessaleno Devezas - The Economics of Digital Transformation",
        text: "The Economics of Digital Transformation: Approaching Non-stable and Uncertain Digitalized Production Systems, with J. Leitão and A. Sarygulov. Springer, Heidelberg, Germany, January 2021.",
        summary: "The Economics of Digital Transformation"
    },
    {
        id: 6,
        img: "img/books/6 - Industry 4.0 - Entrepreneurship and Structural Change.jpg",
        alt: "Tessaleno Devezas - Industry 4.0 - Entrepreneurship and Structural Change in the New Digital Landscape",
        text: "Industry 4.0 - Entrepreneurship and Structural Change in the New Digital Landscape, with J. Leitão and A. Sarygulov. Springer , Heidelberg, Germany, February 2017. *Top 25% most downloaded eBooks in 2018 and 2019.*",
        obs: "Top 25% most downloaded eBooks in 2018 and 2019",
        summary: "Industry 4.0 - Entrepreneurship and Structural Change"
    },
    {
        id: 7,
        img: "img/books/7 - As Lições dos Descobrimentos.jpg",
        alt: "Tessaleno Devezas - As Lições dos Descobrimentos",
        text: "As Lições dos Descobrimentos – O que nos ensinam os empreendedores da globalização, with Jorge Nascimento Rodrigues, Centro Atlântico, V.N. Famalicão, June 2013.",
        summary: "As Lições dos Descobrimentos"
    },
    {
        id: 8,
        img: "img/books/8 - Kondratieff Waves.jpg",
        alt: "Tessaleno Devezas - Kondratieff Waves",
        text: "Kondratieff Waves, Leonid E. Grinin, Tessaleno C. Devezas, Andrey V. Korotayev (Eds), Uchitel Publishing House, Volgograd, 2012.",
        summary: "Kondratieff Waves"
    },
    {
        id: 9,
        img: "img/books/9 - Portugal o Pioneiro da Globalização.jpg",
        alt: "Tessaleno Devezas - Portugal: o Pioneiro da Globalização",
        text: "Portugal: o Pioneiro da Globalização – A Herança das Descobertas, with Jorge Nascimento Rodrigues, revised and extended edition - Centro Atlântico, V.N. Famalicão, June 2009.",
        summary: "Portugal o Pioneiro da Globalização"
    },
    {
        id: 10,
        img: "img/books/10 - Salomão, o Elefante Diplomata.jpg",
        alt: "Tessaleno Devezas - Salomão, o Elefante Diplomata",
        text: "Salomão, o Elefante Diplomata, com Jorge Nascimento Rodrigues, Centro Atlântico, V.N. Famalicão, November 2008.",
        summary: "Salomão, o Elefante Diplomata"
    },
    {
        id: 11,
        img: "img/books/11 - 1509, A Batalha que Mudou o Domínio do Comércio Global.jpg",
        alt: "Tessaleno Devezas - A Batalha que Mudou o Domínio do Comércio Global",
        text: "1509, A Batalha que Mudou o Domínio do Comércio Global, with Jorge Nascimento Rodrigues, Centro Atlântico, V.N. Famalicão, October 2008.",
        summary: "A Batalha que Mudou o Domínio do Comércio Global"
    },
    {
        id: 12,
        img: "img/books/12 - Pioneers of Globalization, Why Portugal Surprised the World.jpg",
        alt: "Tessaleno Devezas - Pioneers of Globalization",
        text: "Pioneers of Globalization, Why Portugal Surprised the World, with Jorge Nascimento Rodrigues, Centro Atlântico, V.N. Famalicão, November 2007 (1st ed), December 2009 (2nd ed).",
        summary: "Pioneers of Globalization, Why Portugal Surprised the World"
    },
    {
        id: 13,
        img: "img/books/13 - Globalization as Evolutionary Process.jpg",
        alt: "Tessaleno Devezas - Globalization as Evolutionary Process",
        text: "Globalization as Evolutionary Process – Modeling Global Change, G. Modelski, T. Devezas and W.R. Thompson (Eds), Routledge, London, December 2007.",
        summary: "Pioneers of Globalization, Why Portugal Surprised the World"
    },
    {
        id: 14,
        img: "img/books/14 - Portugal o Pioneiro da Globalização.jpg",
        alt: "Tessaleno Devezas - Portugal o Pioneiro da Globalização",
        text: "Portugal: o Pioneiro da Globalização – Inovação e Estratégia na História Moderna, with Jorge Nascimento Rodrigues, Centro Atlântico, V.N. Famalicão, May 2007 (1st ed), August 2007 (2nd ed).",
        summary: "Portugal o Pioneiro da Globalização"
    },
    {
        id: 15,
        img: "img/books/15 - Kondratieff Waves, Warfare and World Security.jpg",
        alt: "Tessaleno Devezas - Kondratieff Waves, Warfare and World Security",
        text: "Kondratieff Waves, Warfare and World Security, Editor, NATO Security Through Science Series E: Human and Societal Dynamics vol. 5, IOS Press, Amsterdam, March 2006.",
        summary: "Kondratieff Waves, Warfare and World Security"
    },
]