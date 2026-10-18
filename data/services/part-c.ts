import type { Service } from "@/lib/types";

export const servicesPartC: Service[] = [
  // ---------------------------------------------------------------------------
  // 1. Retaining Walls
  // ---------------------------------------------------------------------------
  {
    slug: "retaining-walls",
    name: "Retaining Walls",
    lowerName: "retaining walls",
    category: "structural",
    tagline:
      "Concrete walls that hold grade on sloped lots, built around drainage first because water is what pushes walls over.",
    metaDescription:
      "Cast-in-place and block retaining walls for sloped and terraced lots, built with sized footings, gravel backfill and drain pipe so the wall stays plumb.",
    overview: [
      "A retaining wall is a structure that lives under constant load. The soil behind it is always pushing, and that push roughly doubles or worse when the backfill gets saturated. That's why most failed walls we're asked to look at didn't fail because the concrete was weak. They failed because water had nowhere to go. Every wall we build starts with a drainage plan: free-draining gravel behind the wall, perforated drain pipe at the heel that daylights or ties into a discharge point, and weep holes or outlets through the face so pressure can't build. On top of that we size the footing to the wall height and the load it carries, and we place reinforcing steel where the wall actually bends, which is usually near the back face at the base.",
      "Around the metro, retaining walls tend to show up in a few recurring situations. On foothill and mesa-edge lots, walls create flat usable terraces out of slopes so you can have a patio, a parking pad or a level yard. Near arroyos and drainage channels, walls and toe protection keep monsoon runoff from undercutting a yard or a driveway edge. And on infill lots, walls step a driveway or a building pad down to meet a neighbor's grade. Each of those has different loads and different water behavior, so we don't treat them the same.",
      "For the wall itself, cast-in-place reinforced concrete is the workhorse for taller walls, walls supporting a driveway or structure, and anywhere you want a monolithic, low-maintenance face. Board-formed concrete, where rough-sawn lumber is used as the form liner, leaves a wood-grain texture that suits contemporary and Territorial-style homes and ages well in strong sun. Reinforced CMU (concrete block) with grouted cells is a solid option for many mid-height walls and can be stuccoed to match the house, and segmental retaining wall units work well for lower landscape terraces where a flexible, gravity-style system is appropriate. We'll tell you which one fits the height, the load and the look you want.",
    ],
    process: [
      {
        title: "Site walk, grade check and load assessment",
        description:
          "We measure the height of soil to be retained, look at what sits above the wall (driveway, structure, slope, pool) and trace where water comes from during a storm. Those three things drive the wall type, footing size and whether engineering is needed.",
      },
      {
        title: "Design, engineering and permitting where required",
        description:
          "For taller walls or walls carrying a surcharge, we coordinate engineered drawings and help you navigate the permit with your jurisdiction. For lower landscape walls, we lay out the footing, reinforcing and drainage details so you know exactly what's being built.",
      },
      {
        title: "Excavation and footing",
        description:
          "We cut back the slope, excavate to firm bearing, and form and reinforce the footing, often with a key or heel sized to resist sliding and overturning. Dowels are set to tie the stem wall to the footing.",
      },
      {
        title: "Wall construction",
        description:
          "Forms go up for cast-in-place or board-formed walls, or block is laid and grouted for CMU. Reinforcing is placed and inspected, weep outlets are set, and the wall is poured or grouted, then cured properly before any backfill load goes on it.",
      },
      {
        title: "Drainage, backfill and finish grading",
        description:
          "Filter fabric, perforated drain pipe and clean gravel go in behind the wall, backfill is placed in compacted lifts, and the top of the wall is graded or capped so surface water is directed away instead of over the face.",
      },
    ],
    signs: [
      {
        title: "Your existing wall is leaning or bowing",
        description:
          "A wall that has tipped out of plumb or bulges in the middle is telling you the soil pressure is winning. That usually points to missing drainage, an undersized footing or no reinforcing, and it rarely corrects itself.",
      },
      {
        title: "Soil or gravel is washing out after monsoon storms",
        description:
          "If every summer storm leaves a fan of sediment on your patio or driveway, or erodes the toe of a slope, a wall with proper drainage and toe protection can stop the loss.",
      },
      {
        title: "You have a slope you can't use",
        description:
          "Foothill and mesa-edge lots often have more slope than flat ground. Terracing with one or more walls can turn that slope into a patio, garden beds or parking.",
      },
      {
        title: "Cracks, stair-step joints or wet stains on the wall face",
        description:
          "Stair-step cracking in block walls, horizontal cracks in concrete walls, or white efflorescence and dark wet patches that persist after rain all suggest water is trapped behind the wall.",
      },
      {
        title: "A driveway or structure sits close to a drop-off",
        description:
          "When a driveway, garage or pool is near the top of a slope, the ground there needs to be held reliably. That situation usually calls for an engineered wall rather than a landscape wall.",
      },
    ],
    materials: [
      {
        name: "Cast-in-place reinforced concrete",
        description:
          "Formed and poured on site with rebar sized and placed to the design. It's the go-to for taller walls, walls carrying a surcharge, and walls that need a monolithic face. Mix design and curing matter, especially in hot, dry weather, so the wall reaches its intended strength before backfill.",
      },
      {
        name: "Board-formed concrete",
        description:
          "Rough-sawn boards line the forms and leave their grain in the face of the wall. It's a structural wall and a finished surface in one step, and the texture holds up well to UV because there's no coating to fade.",
      },
      {
        name: "Reinforced CMU and segmental block",
        description:
          "Grouted, reinforced concrete block on a concrete footing is a practical choice for many mid-height walls and takes stucco to match the house. Segmental retaining units, often with geogrid reinforcement in the backfill, suit lower terraced landscape walls where a gravity system is appropriate.",
      },
      {
        name: "Drainage system: gravel, drain pipe and weep outlets",
        description:
          "Clean, free-draining gravel directly behind the wall, wrapped in filter fabric so fines don't clog it, with perforated pipe at the base that discharges somewhere useful. Weep outlets through the wall give water another way out. This is the part of the wall you never see, and the part that most often decides how long it lasts.",
      },
    ],
    faqs: [
      {
        question: "Do I need a permit for a retaining wall?",
        answer:
          "Often, depending on height and what the wall supports. Under the model residential codes many New Mexico jurisdictions adopt, walls more than roughly 4 feet tall measured from the bottom of the footing to the top of the wall, or walls holding back a surcharge such as a driveway, structure or slope, typically require a permit and an engineered design. Rules vary by city, county and sometimes HOA, so confirm with your jurisdiction before work starts. We can help you figure out which side of the line your wall falls on.",
      },
      {
        question: "Why do retaining walls fail?",
        answer:
          "The most common cause is water. When backfill stays saturated, the pressure on the wall goes up sharply, and walls built without gravel backfill, drain pipe or weep outlets can tip, crack or slide. Undersized footings, missing or misplaced reinforcing, and walls taller than their design are the other usual culprits.",
      },
      {
        question: "Should I use poured concrete or block for my wall?",
        answer:
          "Both can be the right answer. Poured concrete is usually preferred for taller walls, walls supporting a driveway or structure, and board-formed architectural finishes. Reinforced CMU works well for many mid-height walls you plan to stucco, and segmental block is a good fit for lower landscape terraces. We base the recommendation on height, load, access and the look you want.",
      },
      {
        question: "What affects the cost of a retaining wall?",
        answer:
          "Height and length are the biggest factors, followed by whether the wall needs engineering, how hard the digging is (caliche and boulders slow excavation), access for equipment and concrete trucks, the wall type and finish, and how much drainage and backfill work is involved. Removing a failed wall first also adds scope. We'll walk through each factor with you when we quote.",
      },
      {
        question: "Can a retaining wall help with arroyo erosion on my property?",
        answer:
          "It can, but it has to be designed for moving water, not just soil pressure. That usually means a deeper footing or toe protection so flow can't undercut the base, and attention to where runoff goes after it passes the wall. Work in or next to a drainage channel may also involve additional review by your jurisdiction or a flood control authority, so we check that early.",
      },
      {
        question: "How long before I can backfill or load the area above the wall?",
        answer:
          "Concrete needs time to gain strength before it's asked to hold soil. Backfill is commonly placed after the wall has cured for a period set by the design or engineer, often around a week or more, and full surcharge loads like vehicles may wait longer. We'll give you a specific schedule for your wall.",
      },
    ],
    relatedServices: [
      "foundation-installation",
      "structural-concrete",
      "stamped-concrete",
    ],
    permitNote:
      "Under the model residential codes many New Mexico jurisdictions adopt, walls over roughly 4 feet measured from the bottom of the footing, or walls supporting a surcharge such as a driveway, structure or slope, typically require a permit and engineered design. Confirm the threshold and any HOA or drainage-channel requirements with your local jurisdiction before building.",
    timeline:
      "Low landscape walls are often built in a few working days. Taller cast-in-place or engineered walls commonly take one to three weeks of site time once permits are in hand, including footing, wall pour, cure time before backfill, and drainage work.",
    climateNote:
      "Monsoon storms deliver a lot of water in a short time, and that's exactly when a wall without drainage takes its biggest load, so we design the drainage for storm bursts rather than average rainfall. Hot, dry, windy pour days can pull moisture out of wall concrete quickly, so we keep forms on, use curing compounds or wet curing, and schedule pours early. Freeze-thaw cycles are hard on saturated backfill and wall faces, which is one more reason to keep water moving out from behind the wall.",
    soilNotes: {
      caliche:
        "Caliche can make footing excavation slow and may require breaking or saw-cutting, but it often provides firm bearing once reached. The catch is that caliche layers can trap water behind a wall, so we make sure the drain pipe and gravel extend low enough to relieve water perched on top of the hardpan.",
      "expansive-clay":
        "Clay backfill that swells when wet can push on a wall far harder than ordinary soil. We typically replace clay directly behind the wall with free-draining granular backfill and keep surface water from soaking the retained zone, and taller walls in clay are a strong case for an engineer's input.",
      "collapsible-soil":
        "If the soil under the footing collapses when it gets wet, a wall can drop and rotate even if it was built well. We look for signs of collapsible soils, over-excavate and recompact or bear on firmer material where needed, and route drain-pipe discharge well away from the footing so the wall's own drainage doesn't wet the ground beneath it.",
      "river-alluvium":
        "Valley-floor sands and silts can be loose and variable, and groundwater may be relatively shallow, so we verify bearing at the footing and may widen it to spread the load. Walls near irrigation ditches or acequias also need care with drainage outlets and may involve the ditch's governing association.",
      "foothill-granitic":
        "Decomposed granite, cobbles and boulders on foothill lots slow excavation but generally drain well and make good backfill once oversized rock is removed. Slopes here often feed arroyo runoff, so we pay close attention to the toe of the wall and to where storm flow goes once it reaches the top of the wall.",
    },
  },

  // ---------------------------------------------------------------------------
  // 2. Slab Foundation Building
  // ---------------------------------------------------------------------------
  {
    slug: "slab-foundations",
    name: "Slab Foundation Building",
    lowerName: "slab foundations",
    category: "structural",
    tagline:
      "Monolithic slab-on-grade foundations for homes, casitas, garages and shops, built on subgrade that's been properly prepared for desert soils.",
    metaDescription:
      "Monolithic slab-on-grade foundations for homes, casitas, garages and shops, with careful subgrade prep, vapor retarders and plumbing coordination before pour.",
    overview: [
      "A slab foundation, sometimes called a monolithic slab or slab-on-grade, is a foundation and floor poured as one piece. The perimeter is dug deeper to form a thickened edge, often with thickened sections under interior bearing walls, and the edges and slab are placed in a single pour. It's the most common foundation type for single-story homes, casitas and ADUs, detached garages, workshops and many additions around the metro. It's a different job from foundation installation that involves separate footings and stem walls or a crawlspace. With a slab, the floor you'll eventually walk on is part of the foundation, so the flatness, elevation and everything buried beneath it have to be right the first time.",
      "Most of the work on a slab happens before any concrete shows up. The subgrade gets the most attention: desert soils here can include collapsible silts and sands that settle when wetted, expansive clay pockets, and caliche that bears unevenly. Depending on what a geotechnical report or site evaluation shows, that may mean over-excavating and recompacting with moisture conditioning, importing structural fill, or following an engineered design. Then come the layers: a compacted base, under-slab plumbing and electrical sleeves set and inspected, a vapor retarder to keep ground moisture out of finished flooring, reinforcing on chairs at the right height, and forms set to elevation so the finished floor sits above grade and drainage runs away from the building.",
      "On sites with problem soils, an engineer may specify a post-tensioned slab, where high-strength steel tendons are cast in the concrete and tensioned after it cures to keep the slab in compression and help it resist movement. It's an engineered system that requires specific detailing and stressing records, and it isn't needed on every site, but it's a tool worth knowing about if your geotechnical report flags heave or settlement risk. Whatever the design, we pour to the plans, finish to a flatness suited to the flooring going on top, and cure the slab deliberately, because a slab that dries too fast in our climate can curl, crack and give you trouble under tile or wood for years.",
    ],
    process: [
      {
        title: "Plan review and soils information",
        description:
          "We review the foundation plan, the geotechnical report if there is one, and the plumbing and electrical layouts. This is where we confirm slab thickness, edge depth, reinforcing, vapor retarder and finished floor elevation.",
      },
      {
        title: "Excavation and subgrade preparation",
        description:
          "We excavate to the required depth, over-excavate and recompact problem soils as specified, moisture-condition fill, and compact in lifts. A firm, uniform subgrade is the foundation under the foundation.",
      },
      {
        title: "Forms, rough-ins and under-slab layers",
        description:
          "Forms are set to elevation and square, trenches are cut for thickened edges and interior footings, and under-slab plumbing, conduit and sleeves are coordinated with the trades. Base material, vapor retarder and reinforcing go in after rough-ins pass.",
      },
      {
        title: "Pre-pour inspection",
        description:
          "Most jurisdictions require inspection of the forms, footings, reinforcing and under-slab plumbing before concrete is placed. We schedule the pour around inspection approval, not the other way around.",
      },
      {
        title: "Pour, finish and cure",
        description:
          "The edges and slab are placed monolithically, screeded, and finished to the specified flatness and texture, with control joints placed where the plans call for them. We then cure the slab with a method suited to the conditions, whether it will be enclosed soon or exposed to sun and wind.",
      },
    ],
    signs: [
      {
        title: "You're building a casita, ADU or guest house",
        description:
          "A monolithic slab is often the most efficient foundation for a single-story accessory dwelling, and the slab doubles as the subfloor for your finished flooring.",
      },
      {
        title: "You need a garage, shop or barn floor that can take real loads",
        description:
          "Detached garages and workshops need thickened edges for the walls and a slab designed for vehicles, lifts or heavy equipment. Planning that up front avoids cracked floors later.",
      },
      {
        title: "You're adding on to a slab-built home",
        description:
          "Additions need a new slab that matches the existing floor elevation and ties in properly, often with dowels, so the transition doesn't crack or step.",
      },
      {
        title: "Your geotechnical report calls out problem soils",
        description:
          "If a soils report mentions collapse potential, expansive clay or the need for over-excavation, you want a slab contractor who reads that report closely and builds to it.",
      },
    ],
    materials: [
      {
        name: "Monolithic thickened-edge slab",
        description:
          "The perimeter footing and slab are poured together, which eliminates a cold joint between them and speeds construction. Edge depth, width and reinforcing are set by the plans and local requirements and commonly increase where walls or point loads bear.",
      },
      {
        name: "Vapor retarder",
        description:
          "A polyethylene or similar membrane under the slab limits ground moisture moving up through the concrete. Even in a dry climate this matters, because moisture-sensitive flooring and adhesives can fail when moisture comes up from below. Seams are lapped and taped and penetrations sealed.",
      },
      {
        name: "Post-tensioned slab systems",
        description:
          "On some problem-soil sites, engineers specify post-tensioning: steel tendons in sheathing are cast into the slab and stressed after the concrete gains strength. It's an engineered option with its own installation and stressing requirements, used where the design calls for it.",
      },
      {
        name: "Engineered subgrade and structural fill",
        description:
          "Over-excavation, moisture conditioning and compaction of native soils or imported fill, verified by compaction testing when specified. On collapsible or expansive soils, this step does more to protect the slab than anything poured on top of it.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between a slab foundation and a stem wall foundation?",
        answer:
          "A monolithic slab pours the footing and the floor together as one piece, with thickened edges at the perimeter. A stem wall foundation uses separate footings and short foundation walls, with the floor slab or a framed floor built afterward, which can make it easier to raise the floor above grade on sloped lots. Your site, soils and design determine which is the better fit, and we handle stem wall and crawlspace work under our foundation installation service.",
      },
      {
        question: "Do I need a geotechnical report for a slab foundation?",
        answer:
          "For a new home it's commonly required or strongly recommended, and many jurisdictions and engineers expect one. Soils around the metro vary a lot over short distances, and a report tells you whether the ground is collapsible, expansive or contains caliche, and what preparation the slab needs. For smaller structures, ask your jurisdiction what's required and consider a report anyway if you're unsure about the ground.",
      },
      {
        question: "Why does my slab need a vapor retarder in such a dry climate?",
        answer:
          "Soil under a slab holds more moisture than the surface suggests, especially near irrigation or after monsoon rains, and that moisture moves upward through concrete. Without a retarder, it can cause flooring adhesives to fail, wood floors to cup and mold-prone conditions under coverings. It's a low-cost layer relative to the problems it prevents.",
      },
      {
        question: "What affects the cost of a slab foundation?",
        answer:
          "Square footage and slab thickness are a starting point, but the subgrade work often drives the difference between sites: over-excavation depth, imported fill, and compaction testing. Edge and interior footing design, reinforcing type, post-tensioning, plumbing coordination, site access and finish requirements also factor in. A soils report helps pin those variables down.",
      },
      {
        question: "How flat will my slab be?",
        answer:
          "Flatness depends on the specification and the finishing process. Floors that will receive large-format tile, wood or polished finishes typically need tighter flatness than a garage floor. Tell us your planned flooring up front so we can finish to suit it rather than relying on grinding or self-leveler later.",
      },
      {
        question: "How long does a slab need to cure before framing?",
        answer:
          "Framing on a slab often starts within a few days once the concrete has gained enough strength for layout and wall loads, but concrete keeps curing and gaining strength for weeks. Moisture-sensitive flooring usually has to wait considerably longer and is often installed only after moisture testing confirms the slab is ready.",
      },
    ],
    relatedServices: [
      "foundation-installation",
      "concrete-flooring",
      "retaining-walls",
    ],
    permitNote:
      "Slab foundations for homes, ADUs, garages and additions are almost always part of a building permit, with inspections of forms, reinforcing and under-slab plumbing before the pour. Confirm the required inspections and any engineering or soils report requirements with your local jurisdiction.",
    timeline:
      "A typical residential slab, from excavation through pour, often runs about one to three weeks depending on size, subgrade work, rough-in coordination and inspection scheduling. Framing can usually begin within days of the pour, while moisture-sensitive flooring commonly waits weeks or longer.",
    climateNote:
      "Low humidity, wind and strong sun can dry the top of a fresh slab far faster than the bottom, which leads to plastic shrinkage cracks and slab curling, so we pour early, use evaporation retarders on harsh days and start curing promptly. A slab that will be enclosed soon cures differently from one sitting in the open, and we adjust the curing method to match. In winter, a slab poured on frozen subgrade or left unprotected overnight can be damaged, so cold-weather pours get insulated blankets and attention to subgrade temperature.",
    soilNotes: {
      caliche:
        "Caliche under part of a slab footprint and softer soil under the rest can create uneven support, which shows up as cracks along the transition. We typically excavate to a uniform depth below the slab and replace with a consistent compacted fill so the whole footprint bears similarly.",
      "expansive-clay":
        "Clay that swells under a slab can lift the center or edges and crack the floor. Common approaches include removing and replacing clay with non-expansive fill, moisture conditioning, and in some cases an engineered or post-tensioned slab, along with grading and gutters that keep water from pooling at the foundation.",
      "collapsible-soil":
        "Collapsible soils are a classic reason slabs settle after the landscaping goes in and irrigation starts. We follow the soils report's over-excavation and recompaction recommendations and emphasize final grading, downspout discharge and keeping irrigation away from the foundation edge.",
      "river-alluvium":
        "Valley-floor soils can be loose and vary in density across a single lot, and groundwater may be closer to the surface. We proof-roll and compact carefully, remove soft spots, and treat the vapor retarder and finished floor elevation as especially important on these sites.",
      "foothill-granitic":
        "Granitic soils with cobbles and boulders generally drain and bear well, but large rock under a slab creates hard spots and makes trenching edges slow. We remove oversized rock from the subgrade, cap with a uniform base, and grade slopes so arroyo-style runoff flows around the building rather than toward it.",
    },
  },

  // ---------------------------------------------------------------------------
  // 3. Stamped Concrete (flagship)
  // ---------------------------------------------------------------------------
  {
    slug: "stamped-concrete",
    name: "Stamped Concrete",
    lowerName: "stamped concrete",
    category: "residential",
    flagship: true,
    tagline:
      "Patios, courtyards and drives with the look of flagstone, slate or Saltillo tile, built and colored to hold up under high-desert sun.",
    metaDescription:
      "Stamped concrete patios, pool decks, courtyards and driveways in flagstone, slate and tile patterns, with UV-stable earth-tone color and a clear resealing plan.",
    overview: [
      "Stamped concrete gives you the look of stone, tile or wood with the strength and continuity of a concrete slab. While the concrete is still plastic, we color it, apply a release agent, and press textured stamps across the surface to imprint the pattern and texture, then detail the edges and joints by hand. Done well, it reads as natural material from a few feet away and doesn't heave, shift or grow weeds between pieces the way loose pavers or flagstone on sand can. It's a good fit for patios, pool decks, courtyards, front entries and walkways, and with the right base and thickness, driveways.",
      "Pattern and color are where stamped concrete either complements a house or fights it. For Pueblo Revival and Territorial homes, random flagstone and ashlar slate patterns in sandstone, adobe and buff tones tend to look at home, and Saltillo-style tile patterns suit courtyards and portales with a hacienda feel. Wood-plank stamps can echo vigas and latillas under a covered portal. We pull color from your stucco, trim and the landscape, then use a base color with a contrasting release or antiquing to create the depth that makes stone patterns believable. Earth tones are not just an aesthetic choice here: warm tans, browns and muted reds generally hold up better to intense UV than saturated or very dark colors, and lighter colors stay noticeably cooler underfoot in July, which matters around a pool or on a south-facing patio.",
      "The part of stamped concrete homeowners hear the least about is maintenance, and in this climate it deserves an honest conversation. The sealer that gives stamped concrete its depth and protects the color is the layer most exposed to the sun, and UV, heat and wind-blown grit break it down over time. Most stamped surfaces here benefit from resealing every few years, sooner on unshaded, high-traffic or pool-deck surfaces, and you'll usually see the signs before any real damage: the surface looks dull or chalky, water stops beading, or the color starts looking washed out. We choose sealers for UV stability and breathability, add slip-resistant grit where people walk barefoot or wet, and leave you with a straightforward plan for when and how to reseal.",
    ],
    process: [
      {
        title: "Design consultation: pattern, color and layout",
        description:
          "We look at your architecture, stucco and landscape, show you pattern and color samples, and lay out the space, including where control joints will fall so they're hidden in the pattern rather than cutting across it. We also discuss shade, pool use and how you'll actually use the space.",
      },
      {
        title: "Excavation, base and forming",
        description:
          "We remove existing material, excavate to depth, and build a compacted base suited to the use: thicker for driveways, with attention to soil conditions everywhere. Forms are set with slope so water drains away from the house and pool, and reinforcing goes in as specified.",
      },
      {
        title: "Pour and color",
        description:
          "Concrete is placed and leveled, with color either mixed integrally at the plant or broadcast as a color hardener onto the fresh surface. Timing is critical in dry, windy weather, so we pour early and stage crew and tools to stay ahead of the set.",
      },
      {
        title: "Release, stamping and hand detailing",
        description:
          "A release agent in a contrasting or complementary tone is applied, and stamps are pressed in sequence while the concrete is at the right firmness. Edges, steps and transitions are textured by hand, and control joints are cut or tooled into the pattern lines.",
      },
      {
        title: "Wash, seal and walk-through",
        description:
          "After initial curing, excess release is washed off to reveal the antiqued effect, and the surface is sealed with a UV-stable sealer, with grit added where slip resistance matters. We walk the finished work with you and go over care and resealing timing.",
      },
    ],
    signs: [
      {
        title: "Your patio or courtyard is cracked, faded or uneven",
        description:
          "Old broom-finished slabs with cracks, settled flagstone or worn pavers are prime candidates for replacement with a stamped surface that looks like stone but performs like a slab.",
      },
      {
        title: "Your pool deck is too hot or too slick",
        description:
          "A light-toned stamped deck with a textured pattern and slip-resistant sealer can be both cooler underfoot and easier to walk on wet than smooth or dark surfaces.",
      },
      {
        title: "You want stone or tile looks without the upkeep",
        description:
          "Natural flagstone on sand and loose pavers can shift, sink and sprout weeds. Stamped concrete gives you a similar look on a continuous slab with less ongoing resetting.",
      },
      {
        title: "Your entry doesn't match the house",
        description:
          "A plain gray walk or drive can undercut the character of a Pueblo Revival or Territorial home. A stamped and colored entry in the right pattern ties hardscape to architecture.",
      },
      {
        title: "You're adding a portal, outdoor kitchen or fire pit area",
        description:
          "New outdoor living spaces are an ideal time to pour stamped concrete, since layout, slope, utility sleeves and the pattern can all be planned together.",
      },
    ],
    materials: [
      {
        name: "Integral color vs. color hardener",
        description:
          "Integral color is mixed into the concrete at the plant, so the color goes all the way through and chips or wear don't reveal gray concrete; it tends to produce softer, more natural tones. Color hardener is broadcast onto the fresh surface and troweled in, giving more vivid color and a denser, harder surface layer. Many projects use an integral base with a contrasting release, and we'll recommend based on the look, traffic and sun exposure.",
      },
      {
        name: "Release agents and antiquing",
        description:
          "Release keeps stamps from sticking and, when tinted, leaves darker color in the low spots of the texture after wash-off. That two-tone effect is what makes flagstone, slate and tile patterns look dimensional. Powdered and liquid releases each have their place, and some projects get an additional antiquing wash for more variation.",
      },
      {
        name: "Patterns suited to Southwest architecture",
        description:
          "Random flagstone, ashlar slate, cobblestone, Saltillo-style tile and wood plank are common choices here. Matching pattern scale to the space matters: large flagstone suits open patios and drives, smaller tile patterns suit courtyards and entries, and wood plank works well under portales and beside viga-style framing.",
      },
      {
        name: "UV-stable sealers with slip-resistant grit",
        description:
          "Sealers protect color and make cleanup easier, but they're also the first thing the sun attacks. Breathable, UV-stable acrylic sealers are common for exterior stamped work, with other chemistries used in specific situations. A fine grit additive mixed into the sealer improves traction on pool decks, steps and ramps, a detail we consider standard where feet get wet.",
      },
    ],
    faqs: [
      {
        question: "How often does stamped concrete need to be resealed here?",
        answer:
          "Many stamped surfaces in the high desert benefit from resealing every two to three years, though the right interval depends on sun exposure, traffic, the sealer used and whether the area is a pool deck. Unshaded south- and west-facing surfaces usually need it sooner. Watch for water no longer beading, a dull or chalky look, or color that seems washed out, and reseal before the surface wears down to bare concrete.",
      },
      {
        question: "Will the color fade in the New Mexico sun?",
        answer:
          "Some change over time is normal with any exterior color, and intense UV here accelerates it, especially on very dark or saturated colors. Earth tones, integral color that runs through the slab, quality pigments and a maintained UV-stable sealer all help the color hold. Much of what people describe as fading is actually sealer breakdown, which resealing restores.",
      },
      {
        question: "Is stamped concrete slippery around a pool?",
        answer:
          "Smooth stamped surfaces with a glossy sealer can be slick when wet. Around pools we choose patterns with more texture, use a lighter finish, and add slip-resistant grit to the sealer. Grit can wear over time, so it's typically renewed as part of resealing.",
      },
      {
        question: "Does stamped concrete crack?",
        answer:
          "All concrete can crack, and stamped concrete is no exception. The goal is to control where cracking happens with properly spaced control joints, which we hide in pattern lines where possible, and to minimize it with good base preparation, appropriate thickness and reinforcing, and careful curing in our dry climate. A hairline crack in a flagstone pattern often blends in as another grout line.",
      },
      {
        question: "What affects the cost of a stamped concrete project?",
        answer:
          "Size and shape, pattern complexity, number of colors and antiquing steps, demolition of existing surfaces, base preparation for your soils, steps and borders, and access for concrete trucks all play a role. Driveways need more thickness and base than patios, and pool decks add slip-resistant finishes and coping details. We'll explain how each choice affects the scope when we quote.",
      },
      {
        question: "Are lighter colors really cooler underfoot?",
        answer:
          "Yes, generally. Lighter colors reflect more of the sun's energy and absorb less, so a buff or sandstone tone is typically noticeably more comfortable barefoot than a dark brown or charcoal on a summer afternoon. For pool decks and unshaded patios, that's often a deciding factor in color choice.",
      },
    ],
    relatedServices: [
      "concrete-sidewalks",
      "concrete-flooring",
      "private-road-construction",
    ],
    permitNote:
      "Patios and walkways on private property often don't need a building permit, but driveway work that touches a public curb, sidewalk or right-of-way usually does, and pool decks may be reviewed with the pool permit. Check with your local jurisdiction and any HOA, since HOAs frequently have rules on hardscape colors and patterns.",
    timeline:
      "Most residential stamped patios and walkways are formed, poured and stamped in about 2-5 working days depending on size and complexity, with sealing after initial cure. Foot traffic is commonly fine within a day or two, while vehicles on stamped driveways typically wait a week or more.",
    climateNote:
      "Stamping depends on catching the concrete at the right firmness, and low humidity, wind and heat shrink that window fast, so we pour early in the day, use evaporation retarders and size the crew to the pour. Intense UV breaks down sealers and can dull color, which is why we favor UV-stable sealers and earth-tone palettes and plan for periodic resealing. Freeze-thaw cycles call for air-entrained concrete on exterior flatwork and keeping deicing salts off the surface, especially in its first winter.",
    soilNotes: {
      caliche:
        "Caliche near the surface can cause uneven support under a patio and can stop water from draining away, which leads to cracking and efflorescence on colored surfaces. We excavate through inconsistent caliche pockets or level them out with compacted base, and we slope the slab so water doesn't sit on the hardpan beneath it.",
      "expansive-clay":
        "Clay that swells under a stamped patio can lift sections and open cracks that show prominently in a decorative surface. We typically remove and replace the top of the clay with granular base, keep the edges dry with grading, and keep irrigation and planters from soaking the soil along the slab.",
      "collapsible-soil":
        "Patios and pool decks are often surrounded by irrigated landscaping, which is exactly what triggers collapsible soils to settle. We compact and moisture-condition the subgrade before pouring and design drainage and planting so sprinkler water and roof runoff don't saturate the ground under the stamped slab.",
      "river-alluvium":
        "Sandy valley soils compact well when properly moisture-conditioned but can be soft where irrigation has kept them wet. We remove soft spots, compact in lifts, and on properties near ditches or with shallow groundwater we pay extra attention to slope and drainage so efflorescence and moisture don't mar the colored surface.",
      "foothill-granitic":
        "Decomposed granite generally provides a stable base, but cobbles and boulders need to be removed so the slab is a uniform thickness, and slopes may need steps or retaining walls to create level patio space. We also direct arroyo runoff around the stamped surface so monsoon flow doesn't erode its edges or deposit grit that wears the sealer.",
    },
  },

  // ---------------------------------------------------------------------------
  // 4. Structural Concrete Construction
  // ---------------------------------------------------------------------------
  {
    slug: "structural-concrete",
    titleName: "Structural Concrete",
    name: "Structural Concrete Construction",
    lowerName: "structural concrete",
    category: "structural",
    tagline:
      "Grade beams, piers, columns, elevated slabs and equipment pads built to stamped engineering drawings and inspected the way the design requires.",
    metaDescription:
      "Structural concrete for grade beams, piers, columns, elevated slabs, structural walls and equipment pads, built to engineered drawings with testing.",
    overview: [
      "Structural concrete is the work where the drawings have an engineer's stamp on them and the concrete is carrying load that someone calculated. That includes grade beams spanning between drilled piers, caissons on difficult soils, columns, elevated slabs and decks, shear and structural walls, and equipment pads for mechanical units, generators or industrial machinery. It shows up on custom homes with complex foundations, on commercial and light-industrial buildings, and on residential projects where a deck, a hillside garage or a heavy piece of equipment needs more than a standard slab. The common thread is that the work has to match the design exactly, and the paper trail has to prove it.",
      "Building to engineered drawings means rebar is fabricated and placed to the detailing, including bar sizes, spacing, laps, hooks, cover and embedded items, and that all of it is in place and checked before concrete arrives. On many projects, the engineer or building official requires special inspections of reinforcing and placement, and field testing during the pour: slump to check workability, air content for exterior or freeze-exposed elements, concrete temperature, and cylinders cast for strength testing at specified ages. We work alongside the general contractor, the engineer of record and the testing agency, flagging conflicts in the drawings through requests for information rather than improvising in the field.",
      "Our climate adds its own engineering problem. Summer pours can face high concrete temperatures, wind and very low humidity that accelerate set and moisture loss, and winter pours face overnight freezing that can damage young concrete. For structural elements, those conditions get a written plan informed by ACI hot- and cold-weather concreting practice: when to schedule the pour, mix adjustments approved by the engineer, how the concrete will be protected and cured, and how temperatures will be monitored. That planning is part of delivering the strength the engineer designed for, not an afterthought.",
    ],
    process: [
      {
        title: "Drawing review and coordination",
        description:
          "We review the structural drawings, specifications and geotechnical report, identify conflicts or missing details, and submit questions to the engineer of record. We coordinate schedule, access and embedded items with the general contractor and other trades.",
      },
      {
        title: "Submittals and pour planning",
        description:
          "Mix designs, rebar shop drawings and any required submittals go to the engineer for review. We build a pour plan covering sequence, placement method, pump or crane needs, construction joints and hot- or cold-weather measures.",
      },
      {
        title: "Excavation, drilling and forming",
        description:
          "Piers and caissons are drilled to the specified depth and bearing, grade beam trenches are cut, and forms and shoring are built for walls, columns and elevated slabs. Shoring for elevated work is set up to the design or a shoring engineer's layout.",
      },
      {
        title: "Reinforcing, embeds and inspection",
        description:
          "Rebar is placed to the shop drawings with correct cover, laps and supports, and anchor bolts, sleeves and embeds are set and checked. Required special inspections and building inspections happen before the pour is released.",
      },
      {
        title: "Placement, testing, curing and documentation",
        description:
          "Concrete is placed and consolidated with the testing agency on site for slump, air, temperature and cylinders as specified. We cure and protect the elements according to the plan, strip forms and shoring only when allowed, and keep records for the project file.",
      },
    ],
    signs: [
      {
        title: "Your plans call for piers, caissons or grade beams",
        description:
          "Sites with collapsible soils, slopes or deep fill often move to drilled piers and grade beams. That work needs a contractor comfortable with engineered details and inspections.",
      },
      {
        title: "You're building an elevated slab, deck or hillside garage",
        description:
          "Concrete that spans over open space depends on shoring, reinforcing and timing being right. It's structural work from the first form to the last shore removed.",
      },
      {
        title: "You need a pad for heavy equipment",
        description:
          "Generators, chillers, transformers and industrial machines may need pads designed for weight, vibration and anchorage, often with specific embeds and tolerances from the equipment manufacturer.",
      },
      {
        title: "Your commercial or light-industrial project requires special inspections",
        description:
          "If the drawings list special inspections and testing, you need a concrete contractor who plans around them, keeps the inspector informed and doesn't pour until reinforcing is signed off.",
      },
    ],
    materials: [
      {
        name: "Engineered reinforcing and rebar detailing",
        description:
          "Bars fabricated to shop drawings reviewed by the engineer, placed with proper cover on chairs and bolsters, with lap lengths, hooks and dowels as specified. Congested areas like beam-column joints get extra attention so concrete can still consolidate around the steel.",
      },
      {
        name: "Specified mix designs",
        description:
          "Structural elements commonly use mixes designed for a specified compressive strength, with requirements for water-cement ratio, aggregate size, air entrainment where exposed to freeze-thaw, and admixtures to control set or workability. Changes to the mix go through the engineer, not around them.",
      },
      {
        name: "Field quality control testing",
        description:
          "Slump, air content, concrete temperature and unit weight checks at the truck, plus cylinders cast and lab-tested for strength at specified ages. The results document that what was placed matches what was designed.",
      },
      {
        name: "Hot- and cold-weather concreting measures",
        description:
          "Early pours, cooled mix water, set-retarding admixtures, wind breaks and evaporation control in summer; heated materials, accelerators, insulated blankets and enclosures in winter, all following ACI 305 and 306 concepts and the project specifications.",
      },
    ],
    faqs: [
      {
        question: "What makes concrete work \"structural\"?",
        answer:
          "Structural concrete carries loads calculated by an engineer, such as the weight of a building, soil pressure, wind or seismic forces, and it's built to stamped drawings. That usually brings stricter requirements for reinforcing, mix design, inspections and testing than flatwork like patios or sidewalks.",
      },
      {
        question: "Why do some foundations use piers and grade beams instead of a slab?",
        answer:
          "When near-surface soils are collapsible, expansive, or contain deep fill, an engineer may carry loads down to firmer material through drilled piers or caissons, with grade beams spanning between them to support walls. It's a way to bypass problem soils rather than rely on them, and it's common on challenging sites.",
      },
      {
        question: "What are special inspections and who arranges them?",
        answer:
          "Special inspections are third-party checks of critical work like reinforcing placement, concrete placement and testing, required by the building code or the engineer on certain projects. They're typically arranged by the owner or their representative, though we coordinate closely with the inspector and testing agency so pours aren't delayed.",
      },
      {
        question: "What affects the cost of structural concrete work?",
        answer:
          "The engineering design drives most of it: quantity and complexity of reinforcing, element sizes, pier depths, formwork and shoring for walls and elevated slabs, and specified mix requirements. Site access, pumping or crane needs, testing and inspection scheduling, and weather protection also add to scope. We price from the drawings so the factors are visible.",
      },
      {
        question: "Can you pour structural concrete in summer heat or winter cold?",
        answer:
          "Yes, with planning. Hot-weather pours are typically scheduled early with measures to control concrete temperature and moisture loss, and cold-weather pours use protection to keep young concrete from freezing and to support strength gain. The plan is agreed with the engineer and general contractor before the pour, and some pours are rescheduled when conditions fall outside what the plan can handle.",
      },
    ],
    relatedServices: [
      "foundation-installation",
      "slab-foundations",
      "concrete-parking-lots",
    ],
    permitNote:
      "Structural concrete is nearly always part of a permitted project with engineered drawings, and many projects also require special inspections and testing beyond standard building inspections. The general contractor or owner typically holds the permit; confirm inspection requirements with your local jurisdiction and the engineer of record.",
    timeline:
      "Schedules depend entirely on the design. Simple equipment pads may take a few days, while pier-and-grade-beam foundations, structural walls or elevated slabs often take several weeks, including inspections, cure time and form or shoring removal when the engineer allows it.",
    climateNote:
      "Summer heat, wind and very low humidity can speed set and pull moisture from structural concrete, so pours are scheduled early and protected per hot-weather practice to protect strength and limit cracking. Winter nights frequently drop below freezing, and young structural concrete has to be kept from freezing until it gains strength, which means blankets, enclosures or heat. Large day-night temperature swings can also create thermal stresses in thick elements, which we account for in curing and protection.",
    soilNotes: {
      caliche:
        "Caliche can slow pier drilling and may require heavier drilling equipment, and it can perch water against foundations. We verify pier depths against the design and the geotechnical engineer's bearing criteria rather than stopping where the drilling gets hard, and we report conditions that differ from the soils report.",
      "expansive-clay":
        "Expansive clay can lift grade beams and slabs from below, so engineers often specify void forms or carton forms under grade beams and piers that extend below the active zone. We install those details exactly as drawn, because skipping them defeats the purpose of the design.",
      "collapsible-soil":
        "Collapsible soils are a major reason engineers choose deep foundations here, carrying loads past the collapsible layer to stable material. We drill to the specified depth, keep water away from open excavations, and coordinate with the geotechnical engineer if conditions differ from the report.",
      "river-alluvium":
        "Valley alluvium can include loose sands and shallower groundwater, which can make drilled shafts unstable and complicate deep excavations. Casing, careful concrete placement methods and close coordination with the geotechnical engineer help keep piers and footings sound in these conditions.",
      "foothill-granitic":
        "Cobbles and boulders in foothill soils can deflect drill bits and slow pier work, and sloped sites often need stepped footings and retaining structural walls. We plan equipment for the ground, build footings to the stepped details on the drawings, and manage arroyo runoff around open excavations during monsoon season.",
    },
  },
];
