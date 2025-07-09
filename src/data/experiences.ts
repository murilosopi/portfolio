import { Experience } from '@/types/experience';
import { Language } from '@/types/language';

export const experiences: Record<Language, Experience[]> = {
  en: [
    {
      initialDate: new Date('2021-02-01T03:00:00Z'),
      finalDate: new Date('2023-12-31T03:00:00Z'),
      id: 'etec-dev-systems',
      type: 'education',
      content: {
        title: 'Technical Course in Systems Development',
        institution: 'Etec de Carapicuíba',
        description:
          'Technical Course in Systems Development at Etec de Carapicuíba, learning concepts and building skills.',
        insightsAndLearnings:
          'Throughout the course, I developed strong skills in HTML, CSS, JavaScript, PHP, and C#, and worked with databases such as MySQL and MariaDB. I also gained experience in mobile development using Java, learned key concepts of networking and protocols, and studied fundamentals of UX and digital design. All of this knowledge was reinforced through hands-on experience with interdisciplinary projects and the final thesis, which required planning, collaboration, and real-world application of the technologies studied. I also had the opportunity to broaden my perspective by attending Campus Party Brasil 15 and taking part in technical visits to companies such as HP and Meta, which connected me to the industry and showed me how technology can generate real impact. These experiences taught me that programming goes far beyond writing code — it’s about solving problems with empathy, purpose, and creativity, building solutions that work in practice and make a difference.'
      }
    },
    {
      initialDate: new Date('2023-01-01T03:00:00Z'),
      finalDate: new Date('2024-01-01T03:00:00Z'),
      id: 'internship-tml',
      type: 'work',
      content: {
        title: 'Web Development Intern',
        company: 'TML Auto Peças',
        role: 'Web Development Intern',
        description:
          'Web Development Intern at TML Auto Peças, working on ERP/CRM systems for the auto parts sector.',
        insightsAndLearnings:
          'During my internship at TML, I worked on the development of an integrated ERP and CRM system for the auto parts sector, where I experienced firsthand the challenges of working with a legacy system. This experience taught me the importance of understanding existing code, maintaining system stability, and planning improvements without compromising features already in production. Using the MVC architecture and technologies such as HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, and Java, I consolidated technical knowledge and improved my ability to fix bugs and handle support tickets in a real software environment. Beyond technical skills, daily interaction with the team strengthened my communication and collaboration abilities, essential for success in development projects. This initial experience was fundamental for my professional growth, preparing me to take on new challenges and responsibilities in the future.'
      }
    },
    {
      initialDate: new Date('2024-01-01T03:00:00Z'),
      finalDate: new Date('2024-10-06T03:00:00Z'),
      id: 'junior-dev-tml',
      type: 'work',
      content: {
        title: 'Junior Full Stack Developer',
        company: 'TML Auto Peças',
        role: 'Junior Full Stack Developer',
        description:
          'Junior Full Stack Developer at TML Auto Peças, leading the development of core features in an ERP/CRM system.',
        insightsAndLearnings:
          'As a Junior Developer at TML Auto Peças, I actively contributed to the evolution of a legacy ERP and CRM system, taking ownership of critical features that directly impacted departments such as finance, logistics, sales, commercial, and warranty. On a daily basis, I worked with PHP using the MVC architecture, JavaScript, jQuery, HTML, CSS, and Bootstrap to build robust, performance-oriented solutions. Highlights included integrating external payment APIs and developing efficient data ingestion and export processes, significantly improving system communication and overall performance. In addition to technical work, I also managed strategic project demands, organized priorities, and supported the coordination of intern activities to ensure alignment and delivery quality. This experience strengthened my technical leadership, cross-functional communication, and decision-making skills based on real business needs.'
      }
    },
    {
      initialDate: new Date('2024-02-01T03:00:00Z'),
      finalDate: new Date('2024-07-31T03:00:00Z'),
      id: 'specialization-project-management',
      type: 'education',
      content: {
        title: 'Technical Specialization in Project Management',
        institution: 'Centro Paula Souza',
        description:
          'Technical Specialization in Project Management at Centro Paula Souza, developing strategic vision and leadership skills.',
        insightsAndLearnings:
          'Throughout the specialization, I deepened my knowledge of PMBOK principles and practices, gaining a solid understanding of key knowledge areas such as scope, time, cost, quality, resources, communication, risk, procurement, and integration. I studied each process group — initiation, planning, execution, monitoring and controlling, and closing — with a focus on the structured and strategic application of project management. Through case studies and integrative projects, I developed a systemic mindset and the ability to make decisions aligned with business objectives, ensuring the delivery of tangible value. This training complements my technical background with a strong foundation in management, enhancing my ability to lead initiatives with clarity, ownership, and a results-driven approach.'
      }
    },
    {
      initialDate: new Date('2024-02-01T03:00:00Z'),
      id: 'bachelor-computer-science',
      type: 'education',
      content: {
        title: 'Bachelor of Computer Science',
        institution: 'Anhembi Morumbi University',
        description:
          'Pursuing a Bachelor of Computer Science at Anhembi Morumbi University, focusing on fundamental and advanced technologies.',
        insightsAndLearnings:
          'Throughout the course, I have gained a solid foundation in computer architecture, Java programming, and data structures, which are crucial for building efficient systems. I also delved into usability, UI/UX, and accessibility, learning to create intuitive and inclusive interfaces. Furthermore, I explored design patterns, enabling me to develop more modular, scalable, and maintainable software. Currently, I am moving into more complex topics such as Big Data and Cloud Computing, understanding nodes, clusters, and parallel computing paradigms (including MapReduce). This knowledge equips me to design robust, high-performance solutions for large-scale distributed data processing. This academic journey is strengthening my ability to work on projects that demand scalability and efficiency, and it is constantly reinforced by the "Pratique" methodology in every discipline, cementing my learning through hands-on projects.'
      }
    },
    {
      initialDate: new Date('2024-09-07T03:00:00Z'),
      id: 'junior-dev-r2',
      type: 'work',
      content: {
        title: 'Junior Developer',
        company: 'R2 Ventures',
        role: 'Junior Developer',
        description:
          'Junior Developer at R2 Ventures, driving business impact through technology and data.',
        insightsAndLearnings:
          'At R2 Ventures, I worked at the intersection of engineering and product, leveraging technology and data as strategic tools to drive decisions that directly impacted flow performance and conversion, user experience, and business outcomes. I contributed to the Banco Bmg project focused on payroll loan hiring, developing features and leading data-driven investigations aimed at identifying bottlenecks, proposing improvements, and optimizing user journeys. I built analytical visualizations and dashboards that supported product decisions, enabling key adjustments to the user experience and contributing to business results. I created custom tracking and monitoring processes that allowed precise observation of application behavior in production, generating actionable insights for continuous flow improvements. On the back-end, I developed APIs in Golang applying Domain-Driven Design (DDD), structuring business domains with entities, aggregates, and services to ensure modularity and scalability. I implemented ETL pipelines in Python for efficient ingestion and transformation of large data volumes, using Databricks for orchestration and distributed processing. I utilized AWS services such as S3 for scalable storage and CloudWatch for real-time monitoring and alerting, ensuring high availability and fast fault detection. I also worked with DynamoDB, modeling data according to access patterns to maximize performance and ensure eventual consistency. On the front-end, I collaborated in developing interfaces with React and Next.js, applying optimization techniques to guarantee a smooth experience and efficient integration with partners. This experience strengthened my ability to integrate technology, data, product, and innovation into a cohesive approach aligned with a single purpose: solving complex problems and driving solutions that generate real business value.'
      }
    }
  ],
  pt: [
    {
      initialDate: new Date('2021-02-01T03:00:00Z'),
      finalDate: new Date('2023-12-31T03:00:00Z'),
      id: 'etec-dev-systems',
      type: 'education',
      content: {
        title: 'Técnico em Desenvolvimento de Sistemas',
        institution: 'Etec de Carapicuíba',
        description:
          'Técnico em Desenvolvimento de Sistemas na Etec de Carapicuíba, aprendendo conceitos e construindo habilidades.',
        insightsAndLearnings:
          'Durante o curso, desenvolvi habilidades sólidas em HTML, CSS, JavaScript, PHP e C#, além de trabalhar com bancos de dados como MySQL e MariaDB. Também tive contato com o desenvolvimento mobile utilizando Java, aprendi os principais conceitos de redes e protocolos, e estudei fundamentos de UX e design digital. Todo esse conhecimento foi consolidado com experiências práticas em projetos interdisciplinares e no desenvolvimento do TCC, que exigiram planejamento, colaboração e aplicação real das tecnologias aprendidas. Tive ainda a oportunidade de expandir minha visão participando da Campus Party Brasil 15 e de visitas técnicas a empresas como a HP e a Meta, o que me conectou com o mercado e mostrou como a tecnologia pode gerar impacto real. Essas vivências me ensinaram que programar vai muito além de escrever código: trata-se de resolver problemas com empatia, propósito e criatividade — criando soluções que funcionam na prática e fazem a diferença.'
      }
    },
    {
      initialDate: new Date('2023-01-01T03:00:00Z'),
      finalDate: new Date('2024-01-01T03:00:00Z'),
      id: 'internship-tml',
      type: 'work',
      content: {
        title: 'Estágio em Desenvolvimento Web',
        company: 'TML Auto Peças',
        role: 'Estagiário de Desenvolvimento Web',
        description:
          'Estagiário em Desenvolvimento de Sistemas na TML Auto Peças, atuando em ERP/CRM para o setor de autopeças.',
        insightsAndLearnings:
          'Durante meu estágio na TML, atuei no desenvolvimento de um sistema integrado de ERP e CRM para o setor de autopeças, onde pude vivenciar de perto os desafios de trabalhar com um sistema legado. Essa experiência me ensinou a importância de entender código pré-existente, manter a estabilidade do sistema e planejar melhorias sem comprometer funcionalidades já em produção. Utilizando a arquitetura MVC e tecnologias como HTML, CSS, Bootstrap, JavaScript, jQuery, PHP e Java, consolidei conhecimentos técnicos e aprimorei minha capacidade de resolver bugs e atender chamados em um ambiente de software real. Além dos aspectos técnicos, o contato diário com a equipe fortaleceu minhas habilidades de comunicação e colaboração, essenciais para o sucesso em projetos de desenvolvimento. Essa vivência inicial foi fundamental para minha evolução profissional, preparando-me para assumir novos desafios e responsabilidades no futuro.'
      }
    },
    {
      initialDate: new Date('2024-01-01T03:00:00Z'),
      finalDate: new Date('2024-10-06T03:00:00Z'),
      id: 'junior-dev-tml',
      type: 'work',
      content: {
        title: 'Desenvolvedor Full Stack Júnior',
        company: 'TML Auto Peças',
        role: 'Desenvolvedor Full Stack Júnior',
        description:
          'Desenvolvedor Júnior Full Stack na TML Auto Peças, liderando o desenvolvimento de funcionalidades em ERP/CRM.',
        insightsAndLearnings:
          'Como Desenvolvedor Júnior na TML Auto Peças, participei ativamente da evolução de um sistema legado de ERP e CRM, assumindo a responsabilidade pelo desenvolvimento de funcionalidades críticas que impactaram diretamente setores como financeiro, logística, vendas, comercial e garantia. No dia a dia, trabalhei com PHP na arquitetura MVC, JavaScript, jQuery, HTML, CSS e Bootstrap, utilizando essas tecnologias para construir soluções robustas e orientadas à performance. Entre os destaques, implementei integrações com APIs externas voltadas a meios de pagamento — como geração de boletos e PIX — e desenvolvi rotinas eficientes para ingestão e exportação de dados, otimizando a comunicação entre sistemas e melhorando significativamente o desempenho das operações. Além do trabalho técnico, também conduzi demandas estratégicas do projeto, organizei prioridades e acompanhei de perto a atuação dos estagiários da equipe, contribuindo para o alinhamento e qualidade das entregas. Essa experiência fortaleceu minhas habilidades em liderança técnica, comunicação entre áreas e tomada de decisão baseada em necessidades reais do negócio.'
      }
    },
    {
      initialDate: new Date('2024-02-01T03:00:00Z'),
      finalDate: new Date('2024-07-31T03:00:00Z'),
      id: 'specialization-project-management',
      type: 'education',
      content: {
        title: 'Especialização Técnica em Gestão de Projetos',
        institution: 'Centro Paula Souza',
        description:
          'Especialização Técnica em Gestão de Projetos no Centro Paula Souza, criando visão estratégica e habilidades de liderança.',
        insightsAndLearnings:
          'Ao longo da especialização, aprofundei meus conhecimentos nos princípios e práticas do PMBOK, compreendendo com clareza as áreas de escopo, tempo, custo, qualidade, recursos, comunicação, riscos, aquisições e integração. Estudei cada grupo de processos — iniciação, planejamento, execução, monitoramento e encerramento — com foco na aplicação estruturada e estratégica do gerenciamento de projetos. Através de estudos de caso e projetos integradores, desenvolvi uma visão sistêmica e a capacidade de tomar decisões alinhadas aos objetivos do negócio, promovendo entregas com valor real. Essa formação complementa minha atuação técnica com fundamentos sólidos de gestão, ampliando minha capacidade de liderar iniciativas com clareza, responsabilidade e foco em resultados.'
      }
    },
    {
      initialDate: new Date('2024-02-01T03:00:00Z'),
      id: 'bachelor-computer-science',
      type: 'education',
      content: {
        title: 'Bacharelado em Ciência da Computação',
        institution: 'Universidade Anhembi Morumbi',
        description:
          'Cursando Bacharelado em Ciência da Computação na Anhembi Morumbi, focado em fundamentos e tecnologias avançadas.',
        insightsAndLearnings:
          'No decorrer do curso, adquiri conhecimentos sólidos em arquitetura de computadores, programação em Java e estruturas de dados, essenciais para construir sistemas eficientes. Aprofundei-me em usabilidade, UI/UX e acessibilidade, garantindo a criação de interfaces intuitivas e inclusivas. Também explorei padrões de projetos (design patterns), o que me permite desenvolver softwares mais modulares, escaláveis e de fácil manutenção. Atualmente, estou avançando para tópicos mais complexos como Big Data e Computação em Nuvem, compreendendo nodes, clusters e paradigmas de computação paralela (incluindo MapReduce), o que me capacita a projetar soluções robustas e de alto desempenho para grandes volumes de dados de forma distribuída. Essa jornada está fortalecendo minha capacidade de atuar em projetos que demandam escalabilidade e eficiência, sendo constantemente reforçada pela metodologia "Pratique" em todas as disciplinas, consolidando o aprendizado com projetos mão na massa.'
      }
    },
    {
      initialDate: new Date('2024-09-07T03:00:00Z'),
      id: 'junior-dev-r2',
      type: 'work',
      content: {
        title: 'Desenvolvedor Júnior',
        company: 'R2 Ventures',
        role: 'Desenvolvedor Júnior',
        description:
          'Desenvolvedor Júnior na R2 Ventures, impactando negócios com tecnologia e dados.',
        insightsAndLearnings:
          'Na R2 Ventures, atuei na interseção entre engenharia e produto, utilizando tecnologia e dados como ferramentas estratégicas para impulsionar decisões que impactaram diretamente a performance e conversão dos fluxos, a experiência do usuário e os resultados no negócio. Trabalhei no projeto do Banco Bmg com foco na contratação de consignados, contribuindo no desenvolvimento de features e na condução de investigações orientadas por dados, com o objetivo de identificar gargalos, propor melhorias e otimizar jornadas. Desenvolvi visualizações analíticas e dashboards que auxiliaram na tomada de decisões de produto, proporcionando ajustes importantes na experiência do usuário e contribuindo para a geração de resultados no negócio. Criei trackings personalizados e processos de monitoramento que permitiram acompanhar o comportamento das aplicações em produção com precisão, gerando insights acionáveis para a melhoria contínua dos fluxos. No back-end, desenvolvi APIs em Golang aplicando Domain-Driven Design (DDD), estruturando os domínios de negócio com entidades, agregados e serviços para garantir modularidade e escalabilidade. Implementei pipelines de ETL em Python para ingestão e transformação eficiente de grandes volumes de dados, utilizando Databricks para orquestração e processamento distribuído. Utilizei serviços AWS como S3 para armazenamento escalável e CloudWatch para monitoramento e alertas em tempo real, garantindo alta disponibilidade e rápida detecção de falhas. Também trabalhei com DynamoDB, modelando os dados conforme padrões de acesso para maximizar a performance e assegurar consistência eventual. No front-end, colaborei no desenvolvimento de interfaces em React e Next.js, aplicando técnicas de otimização para garantir uma experiência fluida e integração eficiente com parceiros. Essa experiência reforçou minha habilidade de integrar tecnologia, dados, produto e inovação em uma abordagem coesa, alinhada a um propósito único: resolver problemas complexos e impulsionar soluções que geram valor real para o negócio.'
      }
    }
  ]
};
