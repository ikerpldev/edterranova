export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export interface Servicio {
  slug: string;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga: string;
  beneficios: string[];
  faq: FAQ[];
  icon: string;
  imagen: string;
  color: string;
}

export const servicios: Servicio[] = [
  {
    slug: "ortodoncia",
    nombre: "Ortodoncia",
    descripcionCorta:
      "Brackets metálicos, estéticos y alineadores Invisalign para sonrisas alineadas a cualquier edad.",
    descripcionLarga:
      "La ortodoncia corrige la posición de los dientes y la mordida para mejorar tanto la estética como la función masticatoria. En Especialidades Dentales Terranova ofrecemos diagnóstico digital 3D para planear tu tratamiento con precisión, mostrándote el resultado esperado desde la primera consulta.\n\nManejamos las opciones más demandadas: brackets metálicos tradicionales, brackets estéticos de cerámica casi imperceptibles, y alineadores transparentes tipo Invisalign para quienes prefieren un tratamiento prácticamente invisible. Cada plan se diseña a la medida del paciente, con revisiones mensuales y retenedores incluidos al finalizar.\n\nUn tratamiento ortodóncico bien llevado no solo embellece tu sonrisa: mejora la salud de tus encías, facilita la limpieza dental y corrige problemas de mordida que con los años causan desgaste, dolor mandibular o migrañas.",
    beneficios: [
      "Diagnóstico digital 3D y simulación del resultado final",
      "Opciones estéticas: brackets cerámicos y alineadores Invisalign",
      "Mensualidades sin intereses para hacerlo accesible",
      "Retenedores incluidos al terminar el tratamiento",
      "Seguimiento mensual con ortodoncista certificado",
    ],
    faq: [
      {
        pregunta: "¿Cuánto cuesta la ortodoncia en Guadalajara?",
        respuesta:
          "El costo varía según la complejidad del caso y el tipo de aparatología. Los brackets metálicos suelen rondar entre $18,000 y $35,000 MXN por tratamiento completo, mientras que Invisalign va desde $45,000 MXN. En tu valoración inicial sin costo te entregamos un plan con el precio exacto y planes de mensualidades sin intereses.",
      },
      {
        pregunta: "¿Duele usar brackets o alineadores?",
        respuesta:
          "Los primeros 3 a 5 días después de cada ajuste puedes sentir presión o molestia leve, especialmente al masticar. No es dolor agudo y se controla con un analgésico común. Los alineadores Invisalign suelen ser más cómodos porque no llevan piezas metálicas que rocen los labios y mejillas.",
      },
      {
        pregunta: "¿Cuánto tiempo dura un tratamiento de ortodoncia?",
        respuesta:
          "La mayoría de los tratamientos duran entre 18 y 30 meses. Los casos más simples se resuelven en 12 meses y los más complejos pueden llegar a 36. Tras la valoración digital te damos un tiempo estimado realista para tu caso particular.",
      },
      {
        pregunta: "¿Qué diferencia hay entre Invisalign y brackets tradicionales?",
        respuesta:
          "Invisalign usa alineadores transparentes y removibles que casi nadie nota; ideal para adultos profesionistas. Los brackets son fijos, más económicos y permiten resolver casos más complejos. Ambos llegan a resultados muy similares cuando el caso es adecuado, la diferencia está en estética, comodidad y presupuesto.",
      },
    ],
    icon: "Smile",
    imagen:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=80",
    color: "#00A8E8",
  },
  {
    slug: "endodoncia",
    nombre: "Endodoncia",
    descripcionCorta:
      "Tratamiento de conductos para salvar piezas con caries profunda o infección sin tener que extraerlas.",
    descripcionLarga:
      "La endodoncia, también conocida como tratamiento de conductos o 'matar el nervio', es el procedimiento que permite conservar un diente cuando la caries ha llegado al nervio o cuando existe una infección en la raíz. En lugar de extraer la pieza, retiramos el tejido infectado, desinfectamos los conductos y los sellamos para que el diente siga funcionando muchos años.\n\nUsamos microscopio dental y localizadores apicales electrónicos para garantizar la mayor precisión y reducir el tiempo en el sillón. La mayoría de las endodoncias se resuelven en una sola sesión de 60 a 90 minutos, con anestesia local que hace el procedimiento totalmente indoloro.\n\nUna endodoncia bien hecha tiene una tasa de éxito superior al 90% y permite conservar tu diente natural, evitando la necesidad de implantes o puentes a futuro.",
    beneficios: [
      "Conserva tu diente natural en lugar de extraerlo",
      "Procedimiento indoloro con anestesia local moderna",
      "Tecnología con microscopio para mayor precisión",
      "La mayoría de los casos se resuelven en una sola cita",
      "Tasa de éxito superior al 90% a largo plazo",
    ],
    faq: [
      {
        pregunta: "¿Cuánto cuesta una endodoncia en Guadalajara?",
        respuesta:
          "Depende del diente: una endodoncia en un incisivo (frontal) cuesta desde $3,500 MXN, en un premolar entre $4,500 y $5,500 MXN, y en una muela (molar) ronda los $6,000 a $7,500 MXN por su mayor complejidad. Incluimos las radiografías de control en el precio.",
      },
      {
        pregunta: "¿La endodoncia duele?",
        respuesta:
          "No. El dolor que la gente recuerda es el del diente infectado antes de llegar al consultorio. Con la anestesia local moderna el procedimiento es totalmente indoloro. Después puedes sentir sensibilidad leve por 2 o 3 días, que se controla fácil con un analgésico común.",
      },
      {
        pregunta: "¿Cuánto tiempo dura un diente con endodoncia?",
        respuesta:
          "Si se realiza correctamente y se restaura con una corona, el diente puede durar toda la vida. Es muy importante colocar la corona en las semanas siguientes para protegerlo de fracturas, ya que un diente sin pulpa es más frágil.",
      },
      {
        pregunta: "¿Es mejor endodoncia o implante?",
        respuesta:
          "Siempre que sea posible salvar el diente natural, la endodoncia es la mejor opción. Es menos invasiva, más económica y conserva las estructuras originales. El implante es una excelente alternativa cuando ya no se puede salvar la pieza.",
      },
    ],
    icon: "Activity",
    imagen:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80",
    color: "#0A4D8C",
  },
  {
    slug: "implantologia",
    nombre: "Implantología Dental",
    descripcionCorta:
      "Implantes de titanio que reemplazan piezas perdidas con la estética y función de dientes naturales.",
    descripcionLarga:
      "Los implantes dentales son la mejor solución a largo plazo para reemplazar dientes perdidos. Consisten en una pequeña raíz artificial de titanio que se integra al hueso maxilar mediante un proceso llamado osteointegración. Sobre el implante se coloca una corona de porcelana que imita por completo un diente natural en color, forma y función.\n\nTrabajamos con las marcas premium de implantes (Straumann y Nobel Biocare) y realizamos planificación digital 3D con tomografía para garantizar la colocación más segura y predecible. En casos seleccionados ofrecemos la técnica de carga inmediata, que te permite salir del consultorio con el diente provisional el mismo día.\n\nUn implante bien planeado y cuidado puede durar toda la vida. A diferencia de los puentes, no requiere desgastar los dientes vecinos y preserva el hueso de la zona, evitando el envejecimiento facial que provoca la pérdida ósea.",
    beneficios: [
      "Solución permanente: pueden durar toda la vida",
      "Implantes premium Straumann y Nobel Biocare",
      "Planificación digital 3D con tomografía",
      "Carga inmediata disponible en casos seleccionados",
      "Mensualidades a 6, 12 y 18 meses sin intereses",
    ],
    faq: [
      {
        pregunta: "¿Cuánto cuesta un implante dental en Guadalajara?",
        respuesta:
          "Un implante completo (tornillo + pilar + corona de porcelana) en nuestra clínica va desde $22,000 MXN con marcas premium. El precio incluye la tomografía 3D, la cirugía y la corona final. Ofrecemos planes de mensualidades sin intereses a 6, 12 y 18 meses.",
      },
      {
        pregunta: "¿La cirugía de implantes duele?",
        respuesta:
          "No durante la cirugía: usamos anestesia local que adormece por completo la zona. Después, las molestias suelen ser menores que las de una extracción de muela del juicio y se controlan con analgésicos los primeros 2 o 3 días. La mayoría de los pacientes regresan a trabajar al día siguiente.",
      },
      {
        pregunta: "¿Cuánto tiempo tarda el proceso completo de un implante?",
        respuesta:
          "Desde la cirugía hasta la corona final pasan entre 3 y 6 meses, porque el implante necesita osteointegrarse al hueso. Durante ese tiempo puedes usar un provisional para no quedarte sin diente. En casos de carga inmediata, te llevas el provisional el mismo día de la cirugía.",
      },
      {
        pregunta: "¿Qué es mejor: implante, puente o prótesis removible?",
        respuesta:
          "El implante es la opción más cercana a un diente natural y la única que conserva el hueso. El puente fijo es más económico pero requiere desgastar los dientes sanos vecinos. La prótesis removible es la opción más barata pero la menos cómoda. Si tu presupuesto lo permite, el implante es siempre la mejor inversión a largo plazo.",
      },
    ],
    icon: "Sparkles",
    imagen:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80",
    color: "#1A6DB5",
  },
  {
    slug: "estetica-dental",
    nombre: "Estética Dental",
    descripcionCorta:
      "Carillas de porcelana, blanqueamiento y diseño de sonrisa digital para una sonrisa de portada.",
    descripcionLarga:
      "La estética dental va más allá de tener dientes blancos: se trata de diseñar una sonrisa armónica con tu rostro, personalidad y edad. Usamos diseño de sonrisa digital (DSD) para mostrarte una simulación realista del resultado antes de comenzar cualquier tratamiento.\n\nNuestros servicios estéticos incluyen carillas de porcelana de mínima invasión, carillas de resina compuesta de un solo día, blanqueamiento profesional con luz LED, y reconstrucciones de bordes desgastados. Cada caso se planea de forma personalizada, eligiendo materiales y tonos que se vean naturales bajo cualquier luz.\n\nUna sonrisa diseñada profesionalmente impacta en la confianza, las relaciones personales y hasta en oportunidades laborales. Es una de las inversiones con mejor retorno emocional que existen.",
    beneficios: [
      "Diseño digital previo: ves tu sonrisa antes del tratamiento",
      "Carillas de porcelana de altísima estética y durabilidad",
      "Materiales premium libres de metal",
      "Acabado natural imperceptible incluso de cerca",
      "Mensualidades sin intereses disponibles",
    ],
    faq: [
      {
        pregunta: "¿Cuánto cuestan unas carillas dentales en Guadalajara?",
        respuesta:
          "Las carillas de resina compuesta van desde $2,500 MXN por pieza y se hacen en una sola cita. Las carillas de porcelana premium, mucho más estéticas y duraderas, rondan los $8,500 a $12,000 MXN por pieza. Un diseño de sonrisa completo de 8 carillas de porcelana suele ubicarse entre $68,000 y $96,000 MXN.",
      },
      {
        pregunta: "¿Las carillas dañan mis dientes naturales?",
        respuesta:
          "Las carillas modernas son de mínima invasión: se reduce menos de 0.5 mm de esmalte, mucho menos que con coronas tradicionales. Existen incluso técnicas sin desgaste para casos seleccionados. Bien colocadas, protegen el diente y duran entre 10 y 15 años.",
      },
      {
        pregunta: "¿Cuánto dura un blanqueamiento dental?",
        respuesta:
          "El efecto del blanqueamiento profesional suele mantenerse entre 1 y 3 años, dependiendo de tus hábitos: si tomas mucho café, té, vino tinto o fumas, se atenúa más rápido. Recomendamos sesiones de mantenimiento anuales para conservar el resultado.",
      },
      {
        pregunta: "¿Qué es mejor: carillas o blanqueamiento?",
        respuesta:
          "Si tu único problema es el color, el blanqueamiento es lo más conservador y económico. Si además quieres cambiar forma, tamaño o cerrar pequeños espacios, las carillas son la mejor opción porque resuelven varias cosas a la vez con un resultado predecible.",
      },
    ],
    icon: "Sparkles",
    imagen:
      "https://images.unsplash.com/photo-1581585504056-cda28d77c8b9?w=1200&q=80",
    color: "#00A8E8",
  },
  {
    slug: "odontopediatria",
    nombre: "Odontopediatría",
    descripcionCorta:
      "Atención dental especializada para bebés, niños y adolescentes en un ambiente amigable y sin miedo.",
    descripcionLarga:
      "La odontopediatría es la especialidad enfocada exclusivamente en la salud bucal de niños desde la aparición del primer diente hasta la adolescencia. Nuestro consultorio está diseñado para que los peques se sientan cómodos: ambiente colorido, lenguaje cercano, tiempos cortos y técnicas de manejo conductual probadas.\n\nManejamos desde la primera revisión preventiva (a partir de los 12 meses) hasta tratamientos como sellado de fosetas, aplicación de flúor, resinas en dientes de leche y manejo de traumatismos. Nuestra prioridad es que el niño asocie al dentista con una experiencia positiva, sentando la base para una buena salud bucal de por vida.\n\nSi tu hijo o hija tiene miedo o ha tenido una mala experiencia, contamos con técnicas como sedación consciente que permiten realizar el tratamiento de forma totalmente relajada.",
    beneficios: [
      "Ambiente amigable diseñado especialmente para niños",
      "Especialistas certificadas en manejo conductual infantil",
      "Sedación consciente disponible para casos con miedo",
      "Programa preventivo desde los 12 meses de edad",
      "Educación en higiene para padres e hijos",
    ],
    faq: [
      {
        pregunta: "¿A qué edad debe ir mi hijo al dentista por primera vez?",
        respuesta:
          "Recomendamos la primera visita cuando aparece el primer diente, alrededor de los 12 meses de edad. No es para hacer ningún tratamiento, sino para revisar el desarrollo, enseñarte cómo limpiar los dientes del bebé y prevenir la caries de biberón. Las visitas tempranas evitan miedos a futuro.",
      },
      {
        pregunta: "¿Cuánto cuesta una revisión dental para niños?",
        respuesta:
          "La consulta de valoración para niños tiene un costo de $400 MXN e incluye revisión completa, profilaxis y aplicación de flúor cuando aplica. Si tu hijo necesita algún tratamiento adicional, te entregamos un plan claro antes de comenzar.",
      },
      {
        pregunta: "¿Es necesario tratar caries en dientes de leche?",
        respuesta:
          "Sí, absolutamente. Los dientes de leche guardan el espacio para los permanentes y permiten masticar y hablar correctamente. Una caries no tratada puede infectarse, dañar el diente permanente que viene abajo y causar dolor importante al niño.",
      },
      {
        pregunta: "¿Qué hago si mi hijo le tiene miedo al dentista?",
        respuesta:
          "Nuestras odontopediatras están entrenadas en manejo conductual: técnicas de decir-mostrar-hacer, refuerzo positivo y desensibilización. En casos donde el miedo es intenso o el niño es muy pequeño, ofrecemos sedación consciente segura que permite trabajar sin estrés para el pequeño.",
      },
    ],
    icon: "Heart",
    imagen:
      "https://images.unsplash.com/photo-1588776814546-1ffbb3cd39c5?w=1200&q=80",
    color: "#1A6DB5",
  },
  {
    slug: "periodoncia",
    nombre: "Periodoncia",
    descripcionCorta:
      "Tratamiento integral de encías: gingivitis, periodontitis y estética gingival con cirugía mínimamente invasiva.",
    descripcionLarga:
      "La periodoncia se ocupa de la salud de las encías y del hueso que sostiene tus dientes. Más de la mitad de los adultos mexicanos padecen alguna forma de enfermedad periodontal, muchas veces sin saberlo. Detectarla a tiempo es clave para evitar la pérdida de dientes y proteger tu salud general, ya que la periodontitis se ha asociado con enfermedades cardiovasculares y diabetes.\n\nOfrecemos detartraje y curetajes profundos, cirugía periodontal regenerativa, injertos de encía, alargamiento de corona estético para 'sonrisas gingivales' y mantenimientos periódicos. Usamos técnicas mínimamente invasivas y, cuando aplica, terapia con láser para una recuperación más rápida y cómoda.\n\nUnas encías sanas son la base de una boca sana: sin ellas, ningún tratamiento estético o protésico se sostiene a largo plazo.",
    beneficios: [
      "Diagnóstico periodontal completo con sondaje digital",
      "Terapia con láser disponible para mayor confort",
      "Cirugía estética para 'sonrisa gingival'",
      "Injertos de encía para recubrir raíces expuestas",
      "Programa de mantenimiento personalizado",
    ],
    faq: [
      {
        pregunta: "¿Por qué me sangran las encías al cepillarme?",
        respuesta:
          "El sangrado al cepillar nunca es normal: es el primer signo de gingivitis, una inflamación reversible causada por placa bacteriana acumulada. Si no se trata, puede progresar a periodontitis y eventualmente perder dientes. Una limpieza profesional y mejorar la técnica de cepillado suele resolverlo.",
      },
      {
        pregunta: "¿Cuánto cuesta una limpieza dental profunda en Guadalajara?",
        respuesta:
          "Una profilaxis convencional cuesta $700 MXN. Cuando hay enfermedad periodontal y se requiere detartraje profundo con curetajes, el tratamiento por cuadrante (cuarta parte de la boca) ronda los $1,500 a $2,000 MXN. La boca completa suele tratarse en 2 sesiones.",
      },
      {
        pregunta: "¿La periodontitis tiene cura?",
        respuesta:
          "La periodontitis se puede controlar y detener, pero el hueso ya perdido no regresa por sí solo. Por eso es tan importante diagnosticarla y tratarla pronto. Con la terapia adecuada y mantenimientos cada 3 a 4 meses, puedes conservar tus dientes el resto de tu vida.",
      },
      {
        pregunta: "¿Qué es una 'sonrisa gingival' y cómo se corrige?",
        respuesta:
          "Es cuando al sonreír muestras una cantidad excesiva de encía. Se corrige con una cirugía periodontal estética llamada alargamiento de corona, que reposiciona la encía exponiendo más diente. Es un procedimiento ambulatorio que se hace en una sola cita con anestesia local.",
      },
    ],
    icon: "Shield",
    imagen:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
    color: "#0A4D8C",
  },
  {
    slug: "cirugia-oral",
    nombre: "Cirugía Oral",
    descripcionCorta:
      "Extracciones simples y complejas, cordales retenidas, quistes y cirugía pre-protésica con técnicas modernas.",
    descripcionLarga:
      "La cirugía oral abarca todos los procedimientos quirúrgicos de la cavidad bucal, desde una extracción sencilla hasta intervenciones más complejas como muelas del juicio retenidas, exéresis de quistes, frenectomías y cirugías preprotésicas para preparar la boca antes de colocar implantes o prótesis.\n\nNuestros cirujanos maxilofaciales realizan los procedimientos bajo anestesia local en consultorio, y para casos más complejos o pacientes con ansiedad ofrecemos sedación consciente intravenosa con anestesiólogo titulado. Trabajamos con instrumental especializado, suturas absorbibles cuando aplica, y un protocolo de recuperación que minimiza la inflamación y el dolor postoperatorio.\n\nEntregamos siempre instrucciones detalladas por escrito y seguimiento postoperatorio incluido para que tu recuperación sea lo más cómoda posible.",
    beneficios: [
      "Cirujanos maxilofaciales con cédula y posgrado",
      "Sedación consciente disponible con anestesiólogo",
      "Protocolo de recuperación rápida con menos inflamación",
      "Suturas absorbibles para mayor comodidad",
      "Seguimiento postoperatorio incluido",
    ],
    faq: [
      {
        pregunta: "¿Cuánto cuesta extraer una muela del juicio en Guadalajara?",
        respuesta:
          "Una extracción simple (cordal totalmente erupcionada) ronda los $1,800 MXN. Una extracción quirúrgica de cordal retenida (más compleja) está entre $3,500 y $5,500 MXN según el grado de inclusión. Sacar las 4 cordales en una sola sesión con sedación tiene un paquete preferencial.",
      },
      {
        pregunta: "¿Cuánto duele la extracción de cordales?",
        respuesta:
          "Durante la cirugía no sentirás dolor, solo presión. Después, los primeros 2 a 3 días puede haber inflamación y molestia, controlables con los analgésicos que te recetamos. Aplicar hielo las primeras 24 horas y seguir las indicaciones reduce mucho la incomodidad.",
      },
      {
        pregunta: "¿Cuánto tarda la recuperación de una cirugía oral?",
        respuesta:
          "La cicatrización inicial ocurre en 7 a 10 días (cuando retiramos los puntos si no son absorbibles). La inflamación máxima es al segundo o tercer día y baja rápidamente después. La mayoría de los pacientes vuelven a su rutina normal entre el día 3 y el 5.",
      },
      {
        pregunta: "¿Es necesario sacar las muelas del juicio si no duelen?",
        respuesta:
          "No siempre. Si están bien colocadas, sanas y se pueden limpiar, no es necesario extraerlas. Si están retenidas, mal posicionadas o causan caries y problemas en las muelas vecinas, lo recomendable es retirarlas antes de los 30 años, cuando la recuperación es más rápida.",
      },
    ],
    icon: "Zap",
    imagen:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
    color: "#1A6DB5",
  },
  {
    slug: "blanqueamiento",
    nombre: "Blanqueamiento Dental",
    descripcionCorta:
      "Blanqueamiento profesional con luz LED en consultorio y kits para casa, hasta 8 tonos más blancos.",
    descripcionLarga:
      "El blanqueamiento dental profesional es la forma más rápida y segura de aclarar el color de tus dientes. A diferencia de las pastas y kits de farmacia, nosotros usamos peróxidos de uso clínico activados con luz LED de espectro frío, logrando hasta 8 tonos de aclaramiento en una sola sesión de 60 minutos.\n\nAntes del procedimiento realizamos una limpieza dental, protegemos cuidadosamente las encías con barrera de fotocurado y aplicamos el gel blanqueador en varias pasadas. El proceso es totalmente indoloro, aunque puede haber sensibilidad temporal al frío que desaparece en 24 a 48 horas.\n\nTambién ofrecemos blanqueamiento ambulatorio: te entregamos férulas personalizadas y gel para que blanquees en casa de forma cómoda durante 7 a 14 noches. Ideal para mantenimientos o si prefieres un proceso más gradual.",
    beneficios: [
      "Hasta 8 tonos más blancos en una sola sesión",
      "Tecnología LED de espectro frío, sin daño al esmalte",
      "Encías protegidas con barrera profesional",
      "Resultados visibles inmediatamente",
      "Sin sensibilidad prolongada si se sigue el protocolo",
    ],
    faq: [
      {
        pregunta: "¿Cuánto cuesta un blanqueamiento dental en Guadalajara?",
        respuesta:
          "El blanqueamiento profesional en consultorio con luz LED cuesta $3,500 MXN e incluye una limpieza previa, el blanqueamiento completo y un kit de mantenimiento para casa. Si lo prefieres ambulatorio (solo en casa con férulas personalizadas), el costo es de $2,500 MXN.",
      },
      {
        pregunta: "¿El blanqueamiento daña el esmalte de los dientes?",
        respuesta:
          "No, cuando lo realiza un dentista con productos de calidad clínica. La sensibilidad que se siente los primeros días es temporal y reversible: el esmalte no sufre alteraciones permanentes. Los blanqueamientos caseros no profesionales sí pueden dañar el esmalte si se usan mal.",
      },
      {
        pregunta: "¿Cuánto dura el efecto de un blanqueamiento?",
        respuesta:
          "Entre 1 y 3 años en promedio, dependiendo de tus hábitos. Café, té negro, vino tinto, cigarro y refrescos oscuros aceleran el reteñido. Te entregamos un kit de mantenimiento en casa que, usado 2 a 3 veces al año, conserva el resultado por mucho más tiempo.",
      },
      {
        pregunta: "¿Cualquier persona puede hacerse un blanqueamiento?",
        respuesta:
          "Casi todos. No es recomendable en embarazadas, menores de 16 años, personas con hipersensibilidad severa o quienes tienen muchas restauraciones visibles (las resinas y porcelanas no cambian de color). En la valoración te decimos si eres buen candidato y qué resultado esperar.",
      },
    ],
    icon: "Star",
    imagen:
      "https://images.unsplash.com/photo-1606811951341-1395d49d6c25?w=1200&q=80",
    color: "#00A8E8",
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}
