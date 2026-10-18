import type { Area } from "@/lib/types";

export const areas: Area[] = [
  {
    slug: "albuquerque",
    name: "Albuquerque",
    geoLabel: "Albuquerque, NM",
    inPhrase: "Albuquerque",
    metaDescription:
      "Concrete driveways, slabs, patios and repair across Albuquerque, NM, planned around the city's mix of valley alluvium, mesa caliche and foothill soils.",
    character: [
      "Albuquerque is not one job site. It is a river valley, a long climb up to the Sandia foothills on the east, and a broad volcanic mesa to the west, all inside one city. A driveway replacement near Old Town or in the older neighborhoods off Central Avenue usually means tight access, mature trees, existing utilities and a curb cut that has been patched more than once. A new patio in a West Side subdivision might sit on sandy fill over caliche. A slab in the Northeast Heights can run into decomposed granite and cobbles a few inches down. The concrete is similar everywhere; the ground under it is not.",
      "The housing stock is just as varied. You will find pueblo revival and territorial-style homes with flat roofs and canales that dump roof water right where a walkway wants to go, mid-century ranch homes with original driveways that have settled and cracked, and newer tract and custom homes with HOA standards for finish and color. Commercial work ranges from small retail lots on Route 66 to warehouse slabs and sidewalks near the university and the airport. We scope every project to the specific lot, because what works in Nob Hill is not automatically right for a mesa-top home near the edge of town."
    ],
    elevation: "roughly 4,900 feet along the river to about 6,500 feet in the far foothills",
    soilFactors: ["caliche", "collapsible-soil", "expansive-clay"],
    soilSummary:
      "Soil conditions change block by block in Albuquerque. Along the Rio Grande valley floor, sandy and silty alluvium is common, with shallower groundwater near the river. Up on the West Mesa, wind-deposited sands often sit over caliche, and some of those sands are collapsible: they hold up well while dry and can settle when irrigation, a leaking line or roof runoff soaks them. The Northeast Heights trend toward granitic alluvial fans with gravel and cobbles, and pockets of expansive clay turn up in various parts of the city. Before we price base work, we look at the lot, probe or dig where it makes sense, and recommend a geotechnical report for foundations or anywhere the risk of settlement or heave justifies one.",
    climateSummary:
      "With well over a thousand feet of elevation difference across the city, Albuquerque has real microclimates. The valley floor tends to collect cold air on winter nights, so freeze-thaw cycles and cold-weather protection matter more there. The West Mesa is more exposed to spring wind, which speeds surface drying and raises the risk of plastic shrinkage cracking on fresh flatwork. Higher foothill neighborhoods run a bit cooler and can see more snow. Citywide, intense UV and low humidity mean summer pours are commonly scheduled early in the morning, with evaporation control and a deliberate curing plan. Monsoon storms from roughly July through September can send fast runoff down streets and arroyos, so slab edges and drainage paths deserve attention on almost any project.",
    jurisdiction: {
      type: "municipality",
      authority: "City of Albuquerque",
      county: "Bernalillo County",
      permitting:
        "Inside city limits, the City of Albuquerque handles building permits, plan review and inspections, and land use is governed by the city's Integrated Development Ordinance (IDO). Whether a given concrete project needs a permit depends on its scope: structural slabs, foundations and retaining walls above certain heights commonly do, while some flatwork on private property may not. Work in the public right-of-way, such as a new or widened driveway apron, a curb cut or a public sidewalk, typically needs separate right-of-way approval. Rules and thresholds change, so confirm current requirements for your address and scope directly with the City of Albuquerque before work starts.",
      verifyBeforeLaunch:
        "Confirm which City of Albuquerque department currently handles building/concrete permits and plan review, and which handles right-of-way/excavation/curb-cut permits for driveway aprons and public sidewalks. Confirm IDO references are current. Confirm whether flatwork on private property needs a permit and the retaining wall height threshold. Note that some addresses with an Albuquerque mailing address are actually unincorporated Bernalillo County; confirm city-vs-county per address. HOA review applies in many subdivisions."
    },
    faqs: [
      {
        question: "Do I need a permit to replace my driveway in Albuquerque?",
        answer:
          "It depends on what is being replaced. Replacing the private portion of a driveway in the same footprint is often handled differently from work that touches the curb, the apron or the public sidewalk, which typically falls under the City of Albuquerque's right-of-way requirements. Widening a driveway or adding a new curb cut almost always triggers review. We look at the scope with you and help you confirm requirements with the City of Albuquerque before any concrete is removed."
      },
      {
        question: "Why does my concrete on the West Side crack differently than my friend's in the Northeast Heights?",
        answer:
          "Mostly because the ground is different. West Side lots often have sandy, sometimes collapsible soils over caliche, which can settle when they get wet from irrigation or roof runoff. The Northeast Heights tend toward granitic gravels and cobbles that drain well but can be hard to compact evenly. Each condition calls for a different base approach, and both call for moving water away from the slab."
      }
    ],
    landmarks: [
      "Old Town",
      "Sandia Peak Tramway",
      "Nob Hill and Route 66 (Central Avenue)",
      "Balloon Fiesta Park",
      "University of New Mexico"
    ],
    propertyTypes:
      "everything from historic valley homes and mid-century ranches to West Side subdivisions, foothill custom homes and commercial lots",
    nearby: ["rio-rancho", "north-valley", "los-ranchos-de-albuquerque"]
  },
  {
    slug: "rio-rancho",
    name: "Rio Rancho",
    geoLabel: "Rio Rancho, NM",
    inPhrase: "Rio Rancho",
    metaDescription:
      "Concrete driveways, patios, slabs and repair in Rio Rancho, NM, built for mesa-top sands, caliche, wind and the expectations of newer HOA neighborhoods.",
    character: [
      "Rio Rancho sits on the mesa northwest of Albuquerque, and from many streets you can look east across the valley to the Sandias. The city grew out of a large master-planned land development and has kept growing, with new subdivisions continuing to push north and west. That growth shapes the concrete work here: a lot of homes are relatively new, many driveways and patios are original builder pours, and a large share of neighborhoods have HOAs with standards for driveway width, finish and color.",
      "Projects in Rio Rancho tend to fall into a few patterns. Homeowners extend builder driveways for RV or trailer parking, add patios and shade structure footings in backyards that started as bare dirt, and replace walkways that settled after the first few years of irrigation. Along the NM 528 and Unser corridors and around City Center, commercial and institutional work brings sidewalks, parking areas and slabs. Out toward the newer edges of the city, longer driveways and larger lots are more common, along with more exposure to wind."
    ],
    elevation: "roughly 5,100 to 5,900 feet, higher in some of the northern and western areas",
    soilFactors: ["caliche", "collapsible-soil", "expansive-clay"],
    soilSummary:
      "Much of Rio Rancho is built on sandy mesa soils, and caliche layers are common at varying depths, sometimes close enough to the surface to slow excavation and create uneven bearing. Parts of the city are known for collapsible soils that can settle when they get wet, which is why a walkway next to a drip line or a downspout can drop after a few seasons. Some areas also have expansive clay. Because conditions vary by subdivision and even by lot, we look at what is actually under your slab, adjust over-excavation and compaction to suit, and strongly favor designs that keep irrigation and roof water away from concrete edges.",
    climateSummary:
      "Rio Rancho's mesa-top setting is more exposed than the valley below. Spring wind is a real factor for fresh concrete: it pulls moisture off the surface quickly and raises the risk of plastic shrinkage cracks, so wind breaks, evaporation retarders and prompt curing matter. Summer sun is intense, and early-morning pours are standard practice in hot months. Winter nights regularly drop below freezing, so exterior flatwork commonly uses air-entrained concrete, and young slabs should be kept clear of deicing salts. During the monsoon, runoff moves fast across graded lots and down streets on the slope toward the river, so the way a driveway meets the street and how water leaves a patio both deserve thought.",
    jurisdiction: {
      type: "municipality",
      authority: "City of Rio Rancho",
      county: "Sandoval County (a small portion lies in Bernalillo County)",
      permitting:
        "The City of Rio Rancho issues its own building permits and runs its own inspections. Structural slabs, foundations and taller retaining walls commonly require permits, and work that affects the street, curb or public sidewalk typically needs separate approval from the city. Many Rio Rancho neighborhoods also have HOAs that review driveway extensions, colors and finishes before work starts, and that review is separate from the city. Confirm current requirements for your address with the City of Rio Rancho, and check your HOA's guidelines early.",
      verifyBeforeLaunch:
        "Confirm the City of Rio Rancho department that handles building/concrete permits and inspections, and how right-of-way/curb-cut/driveway approach permits are handled. Confirm whether private flatwork needs a permit and the retaining wall threshold. Confirm the Bernalillo County portion is still handled by the City of Rio Rancho for permits (it should be, as it is inside city limits). HOA review is common; confirm per subdivision."
    },
    faqs: [
      {
        question: "Can I widen my driveway for RV parking in Rio Rancho?",
        answer:
          "Often, yes, but there are usually two sets of rules to check. Your HOA, if you have one, may limit width, location or materials, and the City of Rio Rancho may have requirements if the work changes the driveway approach at the street. We help you sort out both before we design the extension, and we plan the base for the heavier loads an RV or trailer brings."
      },
      {
        question: "My builder walkway has sunk along one side. Is that common in Rio Rancho?",
        answer:
          "It is a pattern we see on the mesa. Sandy, sometimes collapsible soils can settle when they are wetted repeatedly, and the usual sources are a nearby drip line, a downspout or a planter bed against the slab. Depending on how far it has moved, leveling or replacement may make sense, but either way the water source needs to be fixed or the problem tends to come back."
      }
    ],
    landmarks: [
      "Rio Rancho Events Center",
      "City Center and the NM 528 corridor",
      "Unser Boulevard",
      "Intel's Rio Rancho campus",
      "Cabezon area"
    ],
    propertyTypes:
      "newer subdivision homes, HOA neighborhoods, larger lots on the growing edges of the city and light commercial sites",
    nearby: ["corrales", "paradise-hills", "albuquerque"]
  },
  {
    slug: "corrales",
    name: "Corrales",
    geoLabel: "Corrales, NM",
    inPhrase: "Corrales",
    metaDescription:
      "Concrete work in Corrales, NM: long driveways, barn and arena slabs, patios and foundations, planned around valley soils, acequias and Village review.",
    character: [
      "Corrales is a long, narrow village strung along Corrales Road (NM 448), with the Rio Grande bosque on the east and the sandy rise toward Rio Rancho on the west. It keeps a deliberately rural feel: large lots, horses, orchards, small vineyards and fields watered by acequias and irrigation ditches. Many properties sit well back from the road on gravel or dirt lanes, and residents tend to care a great deal about keeping that character intact.",
      "That shapes what concrete looks like here. Rather than wide suburban driveways, Corrales projects often mean a modest concrete apron where a lane meets the road, a pad for a barn, workshop or hay storage, footings for portals and coyote fencing, or a courtyard patio that suits an adobe or territorial-style home. Concrete work has to coexist with ditches, mature cottonwoods, septic systems and wells, so access and placement take more planning than they do on a typical city lot."
    ],
    elevation: "roughly 5,000 to 5,300 feet, rising from the valley floor toward the western uplands",
    soilFactors: ["river-alluvium", "collapsible-soil"],
    soilSummary:
      "On the valley side of Corrales, soils are generally Rio Grande alluvium: sandy and silty loams laid down by the river, with groundwater that can be shallower than on the mesa, especially near the bosque and during irrigation season. Compaction can be uneven where old fields, ditch banks or fill were worked over the years. Toward the western uplands, the ground turns sandier and drier, and some of those soils can be collapsible when wetted. We plan base preparation for the specific part of the village you are in and pay close attention to irrigation water, flood irrigation in particular, near any slab.",
    climateSummary:
      "Corrales sits low in the valley, and cold air tends to settle there on clear winter nights, so it can be noticeably colder at dawn than up on the mesa. That means more freeze-thaw cycles and more need for cold-weather protection on winter pours. The trees and bosque give some shelter from wind on the east side, while the western edge is more exposed. Summer sun and dry air still drive fast surface evaporation. During monsoon storms, runoff can come off the escarpment to the west and move toward the valley, so properties near arroyos and lower spots should plan slab grades and drainage carefully.",
    jurisdiction: {
      type: "municipality",
      authority: "Village of Corrales",
      county: "Sandoval County",
      permitting:
        "The Village of Corrales has its own planning and zoning requirements, and the village code calls for development review before building or constructing improvements on a property. Depending on the type of work, building, structural or trade permits and inspections may involve the State of New Mexico's Construction Industries Division (CID) in addition to the Village. Work near acequias or ditches may also involve the parties that manage them. Because the process can differ from Albuquerque or Rio Rancho, confirm requirements for your property and scope directly with the Village of Corrales before work begins.",
      verifyBeforeLaunch:
        "Confirm how the Village of Corrales handles development review permits for concrete/flatwork and who administers them. Confirm whether building/structural permits and inspections go through NM Construction Industries Division (CID) or the Village (UNCONFIRMED). Confirm right-of-way/driveway access permits on Corrales Road (NM 448 is a state route, so NMDOT may be involved) and on village roads. Confirm any ditch/acequia setback or approval requirements. No HOA in most of the village, but some subdivisions may have covenants."
    },
    faqs: [
      {
        question: "Can you pour a slab for a barn or workshop on my Corrales property?",
        answer:
          "Yes, that is a common Corrales project. The main planning questions are soil and water: where your irrigation water runs, how close the slab is to a ditch, and whether the base needs over-excavation or moisture conditioning. Slab thickness and reinforcement are sized for what will sit on it, whether that is hay, equipment or a horse trailer. We also help you confirm what the Village of Corrales and any state requirements call for before we start."
      },
      {
        question: "Will a concrete driveway look out of place in Corrales?",
        answer:
          "It does not have to. Many owners here choose a short concrete apron where a gravel lane meets the road, which controls tracking and erosion, and keep gravel for the rest. Others use earth-toned integral color or a broom or exposed-aggregate finish that sits comfortably next to adobe and native landscaping. We talk through what fits the property and any village guidance before you commit."
      }
    ],
    landmarks: [
      "Corrales Road (NM 448)",
      "Old San Ysidro Church",
      "Corrales Bosque Preserve",
      "Casa San Ysidro",
      "Corrales Growers' Market"
    ],
    propertyTypes:
      "rural acreage, horse properties, adobe and territorial-style homes, barns, workshops and long private lanes",
    nearby: ["rio-rancho", "north-valley", "paradise-hills"]
  },
  {
    slug: "north-valley",
    titleGeo: "North Valley ABQ, NM",
    name: "North Valley",
    geoLabel: "North Valley, Albuquerque, NM",
    inPhrase: "the North Valley",
    metaDescription:
      "Concrete driveways, patios, slabs and repair in the North Valley of Albuquerque, NM, built for valley alluvium, clay lenses, acequias and mature trees.",
    character: [
      "The North Valley stretches along the Rio Grande north of downtown, roughly between the river and the I-25 corridor, with Rio Grande Boulevard and Fourth Street as its main spines. It is one of the older settled parts of the Albuquerque area, and it still feels like it: irrigated lots, big cottonwoods, acequias and laterals running behind properties, horse pastures and small farms tucked between residential streets. Some blocks feel suburban; others feel like the country.",
      "Concrete jobs here often involve working around what is already established. An older driveway might be lifted by a cottonwood root. A patio might be sinking where a flood-irrigated yard has kept the ground wet for years. Long gravel driveways get concrete aprons, older homes get new walkways and steps, and horse properties need pads, wash racks and footings. Access can be narrow, overhead lines and trees are common, and neighbors often share ditches, so we plan staging and drainage with care."
    ],
    elevation: "roughly 4,950 to 5,050 feet on the valley floor",
    soilFactors: ["river-alluvium", "expansive-clay"],
    soilSummary:
      "North Valley soils are mostly Rio Grande alluvium: sandy and silty loams with clay lenses mixed in, laid down by the river over a long time. Groundwater is generally shallower here than on the mesas, and irrigation season can raise moisture in the soil noticeably. Where clay lenses are present, the ground can swell when wet and shrink when dry, which shows up as cracking and uneven slabs. Old fill, filled-in ditches and decades of tree roots add to the variability. We look closely at subgrade conditions, remove soft or organic material, and design for drainage that does not push water under the slab.",
    climateSummary:
      "As part of the valley floor, the North Valley collects cold air on clear nights. Winter mornings can be colder here than in the Heights, which means more freeze-thaw cycles and real attention to cold-weather protection on winter pours and air entrainment for exterior flatwork. The tree canopy can shade parts of a site and slow evaporation, while open fields and pastures can be windy in spring. Monsoon rain on flat valley lots tends to pond rather than run, so getting slab grades right and giving water somewhere to go matters more here than raw slope.",
    jurisdiction: {
      type: "mixed",
      authority: "Bernalillo County or the City of Albuquerque, depending on the address",
      county: "Bernalillo County",
      permitting:
        "The North Valley is a patchwork. Large portions are unincorporated Bernalillo County, where permits and land use are handled through Bernalillo County's planning and development services, while other parts are inside City of Albuquerque limits and follow the city's process and its Integrated Development Ordinance. Your mailing address alone does not settle which applies. Bernalillo County has also been updating its planning for the North Valley area, so land use guidance may change. Confirm which jurisdiction covers your parcel, and what it requires for your scope, before work starts.",
      verifyBeforeLaunch:
        "Confirm the Bernalillo County planning/development services office that handles concrete/building permits in unincorporated areas (refer to it generically on the site). Confirm City of Albuquerque process for in-city parcels. Confirm current status of Bernalillo County's North Valley Area Plan update. Confirm right-of-way/driveway apron permits for county roads vs. city streets, and any ditch/acequia (MRGCD) approvals for work near laterals. Confirm city-vs-county per address. HOA review uncommon but possible."
    },
    faqs: [
      {
        question: "How do I know whether my North Valley property is in the city or the county?",
        answer:
          "The quickest way is to look up your parcel with Bernalillo County or the City of Albuquerque, since many North Valley homes have an Albuquerque mailing address but sit in unincorporated county. The answer decides who reviews your project and what rules apply, so we confirm it at the start of every North Valley job."
      },
      {
        question: "My yard is flood-irrigated. Can I still have a concrete patio next to it?",
        answer:
          "Yes, with some planning. Regularly saturated ground next to a slab can soften the base and, where clay is present, cause movement. We typically raise the patio slightly above the surrounding grade, build a well-compacted base, slope the surface away from the house, and keep a buffer between the patio edge and the irrigated area. A small berm or edge detail can help keep irrigation water from running under the slab."
      }
    ],
    landmarks: [
      "Rio Grande Nature Center State Park",
      "Paseo del Bosque Trail",
      "Rio Grande Boulevard",
      "Fourth Street",
      "Alameda Boulevard"
    ],
    propertyTypes:
      "older valley homes on irrigated lots, horse properties, semi-rural acreage and long private driveways",
    nearby: ["los-ranchos-de-albuquerque", "corrales", "albuquerque"]
  },
  {
    slug: "tanoan",
    titleGeo: "Tanoan ABQ, NM",
    name: "Tanoan",
    geoLabel: "Tanoan, Albuquerque, NM",
    inPhrase: "Tanoan",
    metaDescription:
      "High-end concrete for Tanoan in Albuquerque, NM: courtyards, driveways, decorative and stamped flatwork built for foothill soils and HOA architectural review.",
    character: [
      "Tanoan is a gated golf-course community in the far Northeast Heights, built around Tanoan Country Club near Academy Road with the Sandia foothills rising just to the east. The community is roughly split by Eubank Boulevard into east and west sides, each with its own homeowners association. Homes are largely custom or semi-custom, many in Southwestern contemporary or Santa Fe styles, with courtyards, portals, motor courts and outdoor living areas.",
      "Concrete here is held to a higher visual standard. Owners tend to want decorative and stamped finishes, integral color that matches stucco and stone, crisp joint layouts and clean transitions to pavers and landscaping. Replacement work is often about upgrading an original driveway or courtyard to something more refined, rather than fixing a failure. Gate access, golf-course frontage, neighbors close by and architectural review all shape scheduling and staging."
    ],
    elevation: "around 5,700 to 6,000 feet",
    soilFactors: ["foothill-granitic", "caliche"],
    soilSummary:
      "Tanoan sits on Sandia foothill alluvial fans, so the ground is mostly decomposed granite, sand, gravel and cobbles, with occasional larger rock. These soils generally drain well, but they can be hard to compact evenly, and cobbles near the surface make fine grading slower. Caliche layers turn up in places. Lots often have some slope, and drainage paths run through the neighborhood toward the west. We pay particular attention to compaction under decorative work, since even small settlement shows on a stamped or colored surface, and to keeping golf-course and landscape irrigation away from slab edges.",
    climateSummary:
      "At around 5,700 to 6,000 feet, Tanoan is cooler than the valley and can see more winter snow and ice, especially on north-facing driveways that stay shaded. That makes air-entrained concrete, good surface drainage and avoiding deicing salts on young or decorative concrete important. Summer UV at this elevation is strong, which is hard on sealers and can fade colored concrete faster on south and west exposures, so sealer choice and maintenance deserve attention. Monsoon storms off the mountains can produce quick runoff on sloped lots, so driveway grades and trench drains are worth planning carefully.",
    jurisdiction: {
      type: "city-neighborhood",
      authority: "City of Albuquerque, plus Tanoan HOA architectural review",
      county: "Bernalillo County",
      permitting:
        "Tanoan is generally inside City of Albuquerque limits, so the city's permit and inspection requirements apply to work that needs them, such as structural slabs, foundations and taller retaining walls, along with right-of-way approval for anything touching a public street. Within the community, the homeowners association for your side of Tanoan typically requires architectural review before exterior changes like new driveways, color changes or added hardscape. Plan for HOA review time, and confirm both HOA and City of Albuquerque requirements before work is scheduled.",
      verifyBeforeLaunch:
        "Confirm all Tanoan parcels are within City of Albuquerque limits. Confirm whether Tanoan streets are private (HOA-owned) or public, which changes whether city right-of-way permits apply to driveway aprons. Confirm the architectural review process and contractor access/gate rules for both the east and west associations (do not name associations on the site without client confirmation). City department names for building and right-of-way permits as for Albuquerque."
    },
    faqs: [
      {
        question: "How long does HOA approval usually take for concrete work in Tanoan?",
        answer:
          "It varies by association and by how complete the submittal is. We help you put together what review committees usually want to see, such as a site plan, dimensions, finish and color samples, and we build that review window into the schedule so the pour date is realistic. Your HOA can tell you its current timeline and submittal requirements."
      },
      {
        question: "Will stamped or colored concrete fade in Tanoan's sun?",
        answer:
          "Strong UV at this elevation does wear on color and sealers over time, especially on south- and west-facing surfaces. Integral color generally holds up better than surface-only color, and a UV-stable sealer, reapplied on a sensible maintenance schedule, protects the finish. We talk through color choices with sun exposure in mind and give you a realistic maintenance plan."
      }
    ],
    landmarks: [
      "Tanoan Country Club",
      "Academy Road",
      "Eubank Boulevard",
      "Tramway Boulevard",
      "The Sandia foothills"
    ],
    propertyTypes:
      "custom and semi-custom homes with courtyards, motor courts and decorative hardscape in a gated golf community",
    nearby: ["albuquerque-acres", "albuquerque", "north-valley"]
  },
  {
    slug: "paradise-hills",
    name: "Paradise Hills",
    geoLabel: "Paradise Hills, NM",
    inPhrase: "Paradise Hills",
    metaDescription:
      "Concrete driveways, patios, slab repair and leveling in Paradise Hills, NM, built for northwest mesa sands, caliche, collapsible soils and wind.",
    character: [
      "Paradise Hills sits on the northwest mesa above the Rio Grande, close to the Rio Rancho line, with long views east to the Sandias. It is an established community at its core, with older homes along streets near Paradise Boulevard and Golf Course Road, surrounded by newer subdivisions that filled in around it over the following decades. The result is a mix of mature yards and original concrete alongside newer construction.",
      "That mix sets the work. In the older core, the typical job is replacing or repairing driveways, walkways and patios that have cracked or settled over the years, sometimes with leveling as an option. In newer surrounding areas, projects lean toward driveway extensions, backyard patios and slabs for sheds and shade structures. Many homes face the prevailing wind and the strong afternoon sun, which shows up in how concrete ages here."
    ],
    elevation: "roughly 5,200 to 5,400 feet",
    soilFactors: ["caliche", "collapsible-soil"],
    soilSummary:
      "Paradise Hills is built on West Mesa soils: wind-blown and alluvial sands, often over caliche. Some of these sandy soils are collapsible, meaning they stay firm while dry and can settle when wetted by irrigation, leaking lines or roof runoff. That is a common reason for sunken walkways and cracked patios along planting beds. Caliche can sit close to the surface in places, making excavation slower and bearing uneven. We plan for both: careful over-excavation and compaction, moisture conditioning where it is warranted, and drainage that sends water away from the slab instead of under it.",
    climateSummary:
      "The northwest mesa is open and exposed. Spring wind can be strong and persistent, which speeds evaporation from fresh concrete and raises the risk of plastic shrinkage cracking, so wind breaks, evaporation retarders and immediate curing are standard practice here. Summer sun is intense and pours are typically scheduled early. Winter nights freeze often, so exterior flatwork commonly uses air-entrained concrete. During monsoon storms, water can move quickly across the mesa and toward arroyos, and blowing sand can drift against slab edges, so edge details and drainage matter.",
    jurisdiction: {
      type: "mixed",
      authority: "Bernalillo County or the City of Albuquerque, depending on the address",
      county: "Bernalillo County",
      permitting:
        "Paradise Hills is an unincorporated community in Bernalillo County that is largely surrounded by the City of Albuquerque. The core of the community is generally unincorporated county, where permits and land use go through Bernalillo County's planning and development services, and a county zoning framework specific to the area has historically applied there. Some surrounding and newer areas are inside City of Albuquerque limits and follow the city's process. Because the boundary does not always match what residents expect, confirm which jurisdiction covers your parcel, and its current requirements, before work begins.",
      verifyBeforeLaunch:
        "Confirm the Bernalillo County planning/development services handling of concrete/building permits in the unincorporated Paradise Hills core, and whether the Paradise Hills special zoning district is still in effect. Confirm City of Albuquerque process for in-city parcels in the surrounding area. Confirm right-of-way/driveway apron permits for county vs. city streets. Confirm city-vs-county per address. HOA review applies in some newer subdivisions."
    },
    faqs: [
      {
        question: "My Paradise Hills patio has sunk next to the flower bed. What causes that?",
        answer:
          "The usual cause is water soaking sandy, collapsible soil under the edge of the slab, often from a drip line, sprinkler or downspout aimed at the bed. The soil compacts when wet and the concrete follows it down. Depending on how far it has moved and whether the slab is still sound, leveling or replacement may make sense, but redirecting the water comes first or the settlement is likely to continue."
      },
      {
        question: "Is my Paradise Hills home in Albuquerque or Bernalillo County?",
        answer:
          "It could be either. The original core of Paradise Hills is generally unincorporated Bernalillo County, while some surrounding areas are inside Albuquerque city limits. Your parcel record with Bernalillo County or the City of Albuquerque will show which applies, and we confirm it at the start so permits, if needed, go to the right office."
      }
    ],
    landmarks: [
      "Paradise Boulevard",
      "Golf Course Road",
      "Unser Boulevard",
      "Petroglyph National Monument (to the south)",
      "Cottonwood Mall area"
    ],
    propertyTypes:
      "established mesa-top homes with original concrete and newer surrounding subdivisions",
    nearby: ["rio-rancho", "corrales", "albuquerque"]
  },
  {
    slug: "los-ranchos-de-albuquerque",
    titleGeo: "Los Ranchos, NM",
    name: "Los Ranchos de Albuquerque",
    geoLabel: "Los Ranchos de Albuquerque, NM",
    inPhrase: "Los Ranchos",
    metaDescription:
      "Concrete for Los Ranchos de Albuquerque, NM: driveways, patios, foundations and ag pads planned for valley soils, acequias and the village's rural character.",
    character: [
      "Los Ranchos de Albuquerque is a small village in the North Valley, surrounded by Albuquerque but distinctly its own place. Its identity rests on keeping land open and agricultural: fields, lavender and alfalfa, acequias running along lot lines, large lots and homes set back from Rio Grande Boulevard. The village actively encourages preserving that rural character, and new development is shaped around it.",
      "Concrete work here is usually understated. Homeowners want driveways and courtyards that look like they belong next to adobe walls, cottonwoods and fields, not like a commercial parking lot. Common projects include long driveway aprons, courtyard and portal slabs, foundations for casitas and additions, and pads for barns, equipment and agricultural use. Earth-toned colors, broom or exposed-aggregate finishes and careful edges around landscaping are typical choices."
    ],
    elevation: "roughly 4,950 to 5,050 feet on the valley floor",
    soilFactors: ["river-alluvium", "expansive-clay"],
    soilSummary:
      "Los Ranchos sits on Rio Grande valley alluvium, with sandy and silty loams, clay lenses and generally shallow groundwater compared with the mesas. Irrigation from acequias and flood-watered fields keeps soil moisture high in season, and old field soils can be soft and organic near the surface. Where clay is present, wetting and drying can move a slab. We typically strip organic topsoil, build a solid compacted base, set slabs a bit above surrounding grade, and design edges and drainage so irrigation water stays out from under the concrete.",
    climateSummary:
      "Like the rest of the valley floor, Los Ranchos tends to collect cold air on clear nights, so winter mornings are often colder than in the Heights and freeze-thaw cycles are frequent. Winter pours need cold-weather protection, and exterior flatwork commonly uses air-entrained concrete. Trees and windbreaks soften the wind on some properties, while open fields can be breezy in spring. Valley lots are flat, so monsoon rain tends to pond rather than run off, and slab grades need to be set deliberately to move water away.",
    jurisdiction: {
      type: "municipality",
      authority: "Village of Los Ranchos de Albuquerque",
      county: "Bernalillo County",
      permitting:
        "The Village of Los Ranchos de Albuquerque manages its own planning and zoning, with a Planning and Zoning Commission and the Board of Trustees involved in larger approvals. Building, structural and trade permits and inspections may be handled through arrangements that involve the State of New Mexico's Construction Industries Division (CID) or other partners, depending on the project. Work along Rio Grande Boulevard or near acequias may involve additional approvals. Because the process differs from the City of Albuquerque's, confirm requirements for your property and scope with the Village of Los Ranchos de Albuquerque before work starts.",
      verifyBeforeLaunch:
        "Confirm how the Village of Los Ranchos handles zoning/development review for concrete work and which projects go to the Planning and Zoning Commission. Confirm whether building/structural permits and inspections go through NM Construction Industries Division (CID), the Village, or another arrangement (UNCONFIRMED). Confirm right-of-way/driveway apron approvals on Rio Grande Blvd and village roads, and any acequia/ditch approvals. Confirm village boundaries per address (adjacent parcels may be unincorporated county or City of Albuquerque)."
    },
    faqs: [
      {
        question: "Are there limits on how much concrete I can add in Los Ranchos?",
        answer:
          "The village's zoning and planning rules emphasize rural and agricultural character, and they can affect things like lot coverage, setbacks and the look of larger hardscape. The specifics depend on your zone and project, so we recommend checking with the Village of Los Ranchos de Albuquerque early. We can design around those limits, for example with a concrete apron and gravel drive or a modest courtyard rather than a large paved area."
      },
      {
        question: "Can concrete go near an acequia on my property?",
        answer:
          "Often it can, with planning. Ditches carry water seasonally, which can saturate nearby soil, and the ditch itself usually needs to stay accessible for maintenance. We keep slabs a reasonable distance from ditch banks, build up the base, and grade so water does not run from the slab into the ditch or from the ditch under the slab. You may also need to confirm requirements with the village and with whoever manages the ditch."
      }
    ],
    landmarks: [
      "Los Poblanos Historic Inn & Organic Farm",
      "Rio Grande Boulevard",
      "Los Ranchos Growers' Market",
      "The village's agricultural fields and acequias"
    ],
    propertyTypes:
      "large rural lots, adobe and territorial homes, casitas, agricultural buildings and long private driveways",
    nearby: ["north-valley", "corrales", "albuquerque"]
  },
  {
    slug: "albuquerque-acres",
    name: "Albuquerque Acres",
    geoLabel: "Albuquerque Acres, NM",
    inPhrase: "Albuquerque Acres",
    metaDescription:
      "Concrete driveways, slabs, foundations and retaining walls in Albuquerque Acres, NM, built for foothill soils, slopes, arroyos and long custom-home driveways.",
    character: [
      "Albuquerque Acres, often called North Albuquerque Acres, covers the far Northeast Heights north of Paseo del Norte, climbing toward the Sandia foothills between roughly Wyoming and Tramway. It was laid out in larger lots, and much of it has filled in over time with custom homes, some older homes on acre-plus parcels, and newer infill construction where vacant lots remain. Views of the mountains and the city lights are a big part of the appeal.",
      "Larger lots and slopes shape the concrete work. Long driveways from the street up to the house are common, sometimes with turnarounds and retaining walls. New custom homes need foundation and slab work on sites with real grade changes, and owners often add motor courts, patios and walls to make the most of the views. Construction traffic, dirt roads that have only partly been paved, and arroyos crossing the area all factor into access and drainage planning."
    ],
    elevation: "roughly 5,500 to 6,200 feet, rising toward the foothills",
    soilFactors: ["foothill-granitic", "collapsible-soil"],
    soilSummary:
      "Albuquerque Acres sits on Sandia foothill alluvial fans: decomposed granite, sands, gravel, cobbles and boulders washed down from the mountains. Drainage is generally good, but some of the finer sandy layers can be collapsible when wetted, and fill placed on sloped lots needs to be properly compacted to avoid settlement. Arroyos cross the area, and their banks and nearby soils can be loose. For foundations and larger slabs, a geotechnical report is a smart starting point, and for long driveways we focus on a well-built base and drainage that does not let water run down the driveway and undercut its edges.",
    climateSummary:
      "Higher up the foothills, Albuquerque Acres runs cooler than the valley and catches more snow and ice in winter, particularly on steep or north-facing driveways that stay shaded. Broom finishes for traction, air-entrained concrete and avoiding deicing salts on young slabs all matter here. Winds coming off the mountains can be strong, and summer UV is intense, so pours are scheduled early with evaporation control and prompt curing. Monsoon storms over the Sandias can send fast, sediment-heavy runoff down arroyos and sloped streets, so driveway grades, culverts and edge protection deserve real attention.",
    jurisdiction: {
      type: "mixed",
      authority: "City of Albuquerque or Bernalillo County, depending on the address",
      county: "Bernalillo County",
      permitting:
        "Albuquerque Acres has historically been a mix of parcels inside City of Albuquerque limits and parcels in unincorporated Bernalillo County. City parcels follow the City of Albuquerque's permit process and its Integrated Development Ordinance, while county parcels go through Bernalillo County's planning and development services. Foundations, structural slabs and retaining walls commonly require permits either way, and driveway connections to public roads typically need approval from whichever jurisdiction owns the road. Confirm your parcel's jurisdiction and current requirements before work begins.",
      verifyBeforeLaunch:
        "Confirm the current city-vs-county split in North Albuquerque Acres (much has been annexed; confirm per address). Confirm City of Albuquerque and Bernalillo County permit handling for foundations, slabs and retaining walls, and right-of-way/driveway approach permits on city vs. county roads. Confirm any drainage/arroyo-related review for sloped lots. HOA review applies in some newer subdivisions."
    },
    faqs: [
      {
        question: "What should I know before pouring a long, sloped driveway in Albuquerque Acres?",
        answer:
          "Slope, drainage and winter traction are the big three. Steeper sections typically get a coarser broom finish for grip, and water needs a planned path so it does not run the full length of the driveway and erode the edges or the base. Turnarounds, retaining walls and culverts may be part of the design. We look at the grade and runoff patterns on your lot before recommending a layout."
      },
      {
        question: "Do I need a soils report for a new home or large slab in Albuquerque Acres?",
        answer:
          "For a foundation or a large structural slab, a geotechnical report is commonly recommended and is often required as part of plan review. Foothill soils vary from dense gravel to looser sands that can settle when wet, and sloped lots often involve fill. A soils report tells your engineer and contractor what the ground needs before the concrete goes in."
      }
    ],
    landmarks: [
      "Paseo del Norte",
      "Tramway Boulevard",
      "Wyoming Boulevard",
      "The Sandia foothills",
      "Elena Gallegos Open Space (nearby)"
    ],
    propertyTypes:
      "custom homes on large and sloped lots, long driveways, retaining walls and new infill construction",
    nearby: ["tanoan", "albuquerque", "north-valley"]
  }
];
