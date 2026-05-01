// Edit your project ideas here
// Just change the title and description for each step

// Add your hero section background image links here
const heroImages = [
    'https://i.ibb.co/SgFSKYy/IMG-20250809-140920-jpg.jpg',
    'https://i.ibb.co/MkqWVdvs/2ab09e3f-4e8b-4826-95d3-c3dc8f9d94b7.jpg',
    'atl_lab_hero_bg_3.png',
    'atl_lab_hero_bg_4.png',
    'atl_lab_hero_bg_5.png'
];

const projects = [
    {
        number: "001",
        title: "Smart Waste Hub",
        description: "IoT sensors monitor bin levels in real-time, optimizing collection routes and preventing unhygienic overflow.",
        icon: "trash-2"
    },
    {
        number: "002",
        title: "AI Solar Tracker",
        description: "Intelligent dual-axis tracking that follows the suns path to increase energy output by up to 40%.",
        icon: "sun"
    },
    {
        number: "003",
        title: "Home Assist AI",
        description: "A secure voice-controlled system designed for the elderly, integrating health alerts and automation.",
        icon: "home"
    },
    {
        number: "004",
        title: "Rural Safe-Guard",
        description: "Sensor-based automated lighting and hazard detection for safer navigation in under-developed regions.",
        icon: "shield-check"
    },
    {
        number: "005",
        title: "Aqua-Vision Pro",
        description: "Real-time water quality analysis using multi-sensor nodes to detect contaminants and ensure safe drinking water.",
        icon: "droplets"
    },
    {
        number: "006",
        title: "AI Waste System",
        description: "Advanced ai solution for monitoring and optimizing waste management in real-time using cutting-edge sensors and algorithms.",
        icon: "trash-2"
    },
    {
        number: "007",
        title: "Autonomous Energy System",
        description: "Advanced autonomous solution for monitoring and optimizing energy management in real-time using cutting-edge sensors and algorithms.",
        icon: "sun"
    },
    {
        number: "008",
        title: "Robotic Health System",
        description: "Advanced robotic solution for monitoring and optimizing health management in real-time using cutting-edge sensors and algorithms.",
        icon: "home"
    },
    {
        number: "009",
        title: "AI Rural System",
        description: "Advanced ai solution for monitoring and optimizing rural management in real-time using cutting-edge sensors and algorithms.",
        icon: "shield-check"
    },
    {
        number: "010",
        title: "Autonomous Water System",
        description: "Advanced autonomous solution for monitoring and optimizing water management in real-time using cutting-edge sensors and algorithms.",
        icon: "droplets"
    },
    {
        number: "011",
        title: "Robotic Agriculture System",
        description: "Advanced robotic solution for monitoring and optimizing agriculture management in real-time using cutting-edge sensors and algorithms.",
        icon: "leaf"
    },
    {
        number: "012",
        title: "AI Traffic System",
        description: "Advanced ai solution for monitoring and optimizing traffic management in real-time using cutting-edge sensors and algorithms.",
        icon: "car"
    },
    {
        number: "013",
        title: "Autonomous Security System",
        description: "Advanced autonomous solution for monitoring and optimizing security management in real-time using cutting-edge sensors and algorithms.",
        icon: "lock"
    },
    {
        number: "014",
        title: "Robotic Education System",
        description: "Advanced robotic solution for monitoring and optimizing education management in real-time using cutting-edge sensors and algorithms.",
        icon: "book"
    },
    {
        number: "015",
        title: "AI Weather System",
        description: "Advanced ai solution for monitoring and optimizing weather management in real-time using cutting-edge sensors and algorithms.",
        icon: "cloud"
    },
    {
        number: "016",
        title: "Autonomous Elderly System",
        description: "Advanced autonomous solution for monitoring and optimizing elderly management in real-time using cutting-edge sensors and algorithms.",
        icon: "heart"
    },
    {
        number: "017",
        title: "Robotic Pollution System",
        description: "Advanced robotic solution for monitoring and optimizing pollution management in real-time using cutting-edge sensors and algorithms.",
        icon: "wind"
    },
    {
        number: "018",
        title: "AI Farming System",
        description: "Advanced ai solution for monitoring and optimizing farming management in real-time using cutting-edge sensors and algorithms.",
        icon: "tractor"
    },
    {
        number: "019",
        title: "Autonomous Smart City System",
        description: "Advanced autonomous solution for monitoring and optimizing smart city management in real-time using cutting-edge sensors and algorithms.",
        icon: "building"
    },
    {
        number: "020",
        title: "Robotic Transport System",
        description: "Advanced robotic solution for monitoring and optimizing transport management in real-time using cutting-edge sensors and algorithms.",
        icon: "truck"
    },
    {
        number: "021",
        title: "Next-Gen AI Security Tech",
        description: "Innovative ai solution to revolutionize security operations with advanced efficiency and scalability.",
        icon: "wind"
    },
    {
        number: "022",
        title: "Next-Gen Vision Education Tech",
        description: "Innovative vision solution to revolutionize education operations with advanced efficiency and scalability.",
        icon: "tractor"
    },
    {
        number: "023",
        title: "Next-Gen Cloud Weather Tech",
        description: "Innovative cloud solution to revolutionize weather operations with advanced efficiency and scalability.",
        icon: "building"
    },
    {
        number: "024",
        title: "Next-Gen AI Elderly Tech",
        description: "Innovative ai solution to revolutionize elderly operations with advanced efficiency and scalability.",
        icon: "truck"
    },
    {
        number: "025",
        title: "Next-Gen Vision Pollution Tech",
        description: "Innovative vision solution to revolutionize pollution operations with advanced efficiency and scalability.",
        icon: "package"
    },
    {
        number: "026",
        title: "Next-Gen Cloud Farming Tech",
        description: "Innovative cloud solution to revolutionize farming operations with advanced efficiency and scalability.",
        icon: "shopping-cart"
    },
    {
        number: "027",
        title: "Next-Gen AI Smart City Tech",
        description: "Innovative ai solution to revolutionize smart city operations with advanced efficiency and scalability.",
        icon: "credit-card"
    },
    {
        number: "028",
        title: "Next-Gen Vision Transport Tech",
        description: "Innovative vision solution to revolutionize transport operations with advanced efficiency and scalability.",
        icon: "plane"
    },
    {
        number: "029",
        title: "Next-Gen Cloud Logistics Tech",
        description: "Innovative cloud solution to revolutionize logistics operations with advanced efficiency and scalability.",
        icon: "anchor"
    },
    {
        number: "030",
        title: "Next-Gen AI Retail Tech",
        description: "Innovative ai solution to revolutionize retail operations with advanced efficiency and scalability.",
        icon: "trash-2"
    },
    {
        number: "031",
        title: "Next-Gen Vision Banking Tech",
        description: "Innovative vision solution to revolutionize banking operations with advanced efficiency and scalability.",
        icon: "sun"
    },
    {
        number: "032",
        title: "Next-Gen Cloud Aviation Tech",
        description: "Innovative cloud solution to revolutionize aviation operations with advanced efficiency and scalability.",
        icon: "home"
    },
    {
        number: "033",
        title: "Next-Gen AI Marine Tech",
        description: "Innovative ai solution to revolutionize marine operations with advanced efficiency and scalability.",
        icon: "shield-check"
    },
    {
        number: "034",
        title: "Next-Gen Vision Waste Tech",
        description: "Innovative vision solution to revolutionize waste operations with advanced efficiency and scalability.",
        icon: "droplets"
    },
    {
        number: "035",
        title: "Next-Gen Cloud Energy Tech",
        description: "Innovative cloud solution to revolutionize energy operations with advanced efficiency and scalability.",
        icon: "leaf"
    },
    {
        number: "036",
        title: "Next-Gen AI Health Tech",
        description: "Innovative ai solution to revolutionize health operations with advanced efficiency and scalability.",
        icon: "car"
    },
    {
        number: "037",
        title: "Next-Gen Vision Rural Tech",
        description: "Innovative vision solution to revolutionize rural operations with advanced efficiency and scalability.",
        icon: "lock"
    },
    {
        number: "038",
        title: "Next-Gen Cloud Water Tech",
        description: "Innovative cloud solution to revolutionize water operations with advanced efficiency and scalability.",
        icon: "book"
    },
    {
        number: "039",
        title: "Next-Gen AI Agriculture Tech",
        description: "Innovative ai solution to revolutionize agriculture operations with advanced efficiency and scalability.",
        icon: "cloud"
    },
    {
        number: "040",
        title: "Next-Gen Vision Traffic Tech",
        description: "Innovative vision solution to revolutionize traffic operations with advanced efficiency and scalability.",
        icon: "heart"
    },
    {
        number: "041",
        title: "Next-Gen Cloud Security Tech",
        description: "Innovative cloud solution to revolutionize security operations with advanced efficiency and scalability.",
        icon: "wind"
    },
    {
        number: "042",
        title: "Next-Gen AI Education Tech",
        description: "Innovative ai solution to revolutionize education operations with advanced efficiency and scalability.",
        icon: "tractor"
    },
    {
        number: "043",
        title: "Next-Gen Vision Weather Tech",
        description: "Innovative vision solution to revolutionize weather operations with advanced efficiency and scalability.",
        icon: "building"
    },
    {
        number: "044",
        title: "Next-Gen Cloud Elderly Tech",
        description: "Innovative cloud solution to revolutionize elderly operations with advanced efficiency and scalability.",
        icon: "truck"
    },
    {
        number: "045",
        title: "Next-Gen AI Pollution Tech",
        description: "Innovative ai solution to revolutionize pollution operations with advanced efficiency and scalability.",
        icon: "package"
    },
    {
        number: "046",
        title: "Next-Gen Vision Farming Tech",
        description: "Innovative vision solution to revolutionize farming operations with advanced efficiency and scalability.",
        icon: "shopping-cart"
    },
    {
        number: "047",
        title: "Next-Gen Cloud Smart City Tech",
        description: "Innovative cloud solution to revolutionize smart city operations with advanced efficiency and scalability.",
        icon: "credit-card"
    },
    {
        number: "048",
        title: "Next-Gen AI Transport Tech",
        description: "Innovative ai solution to revolutionize transport operations with advanced efficiency and scalability.",
        icon: "plane"
    },
    {
        number: "049",
        title: "Next-Gen Vision Logistics Tech",
        description: "Innovative vision solution to revolutionize logistics operations with advanced efficiency and scalability.",
        icon: "anchor"
    },
    {
        number: "050",
        title: "Next-Gen Cloud Retail Tech",
        description: "Innovative cloud solution to revolutionize retail operations with advanced efficiency and scalability.",
        icon: "trash-2"
    },
    {
        number: "051",
        title: "Next-Gen AI Banking Tech",
        description: "Innovative ai solution to revolutionize banking operations with advanced efficiency and scalability.",
        icon: "sun"
    },
    {
        number: "052",
        title: "Next-Gen Vision Aviation Tech",
        description: "Innovative vision solution to revolutionize aviation operations with advanced efficiency and scalability.",
        icon: "home"
    },
    {
        number: "053",
        title: "Next-Gen Cloud Marine Tech",
        description: "Innovative cloud solution to revolutionize marine operations with advanced efficiency and scalability.",
        icon: "shield-check"
    },
    {
        number: "054",
        title: "Next-Gen AI Waste Tech",
        description: "Innovative ai solution to revolutionize waste operations with advanced efficiency and scalability.",
        icon: "droplets"
    },
    {
        number: "055",
        title: "Next-Gen Vision Energy Tech",
        description: "Innovative vision solution to revolutionize energy operations with advanced efficiency and scalability.",
        icon: "leaf"
    },
    {
        number: "056",
        title: "Next-Gen Cloud Health Tech",
        description: "Innovative cloud solution to revolutionize health operations with advanced efficiency and scalability.",
        icon: "car"
    },
    {
        number: "057",
        title: "Next-Gen AI Rural Tech",
        description: "Innovative ai solution to revolutionize rural operations with advanced efficiency and scalability.",
        icon: "lock"
    },
    {
        number: "058",
        title: "Next-Gen Vision Water Tech",
        description: "Innovative vision solution to revolutionize water operations with advanced efficiency and scalability.",
        icon: "book"
    },
    {
        number: "059",
        title: "Next-Gen Cloud Agriculture Tech",
        description: "Innovative cloud solution to revolutionize agriculture operations with advanced efficiency and scalability.",
        icon: "cloud"
    },
    {
        number: "060",
        title: "Next-Gen AI Traffic Tech",
        description: "Innovative ai solution to revolutionize traffic operations with advanced efficiency and scalability.",
        icon: "heart"
    },
    {
        number: "061",
        title: "Next-Gen Vision Security Tech",
        description: "Innovative vision solution to revolutionize security operations with advanced efficiency and scalability.",
        icon: "wind"
    },
    {
        number: "062",
        title: "Next-Gen Cloud Education Tech",
        description: "Innovative cloud solution to revolutionize education operations with advanced efficiency and scalability.",
        icon: "tractor"
    },
    {
        number: "063",
        title: "Next-Gen AI Weather Tech",
        description: "Innovative ai solution to revolutionize weather operations with advanced efficiency and scalability.",
        icon: "building"
    },
    {
        number: "064",
        title: "Next-Gen Vision Elderly Tech",
        description: "Innovative vision solution to revolutionize elderly operations with advanced efficiency and scalability.",
        icon: "truck"
    },
    {
        number: "065",
        title: "Next-Gen Cloud Pollution Tech",
        description: "Innovative cloud solution to revolutionize pollution operations with advanced efficiency and scalability.",
        icon: "package"
    },
    {
        number: "066",
        title: "Next-Gen AI Farming Tech",
        description: "Innovative ai solution to revolutionize farming operations with advanced efficiency and scalability.",
        icon: "shopping-cart"
    },
    {
        number: "067",
        title: "Next-Gen Vision Smart City Tech",
        description: "Innovative vision solution to revolutionize smart city operations with advanced efficiency and scalability.",
        icon: "credit-card"
    },
    {
        number: "068",
        title: "Next-Gen Cloud Transport Tech",
        description: "Innovative cloud solution to revolutionize transport operations with advanced efficiency and scalability.",
        icon: "plane"
    },
    {
        number: "069",
        title: "Next-Gen AI Logistics Tech",
        description: "Innovative ai solution to revolutionize logistics operations with advanced efficiency and scalability.",
        icon: "anchor"
    },
    {
        number: "070",
        title: "Next-Gen Vision Retail Tech",
        description: "Innovative vision solution to revolutionize retail operations with advanced efficiency and scalability.",
        icon: "trash-2"
    },
    {
        number: "071",
        title: "Next-Gen Cloud Banking Tech",
        description: "Innovative cloud solution to revolutionize banking operations with advanced efficiency and scalability.",
        icon: "sun"
    },
    {
        number: "072",
        title: "Next-Gen AI Aviation Tech",
        description: "Innovative ai solution to revolutionize aviation operations with advanced efficiency and scalability.",
        icon: "home"
    },
    {
        number: "073",
        title: "Next-Gen Vision Marine Tech",
        description: "Innovative vision solution to revolutionize marine operations with advanced efficiency and scalability.",
        icon: "shield-check"
    },
    {
        number: "074",
        title: "Next-Gen Cloud Waste Tech",
        description: "Innovative cloud solution to revolutionize waste operations with advanced efficiency and scalability.",
        icon: "droplets"
    },
    {
        number: "075",
        title: "Next-Gen AI Energy Tech",
        description: "Innovative ai solution to revolutionize energy operations with advanced efficiency and scalability.",
        icon: "leaf"
    },
    {
        number: "076",
        title: "Next-Gen Vision Health Tech",
        description: "Innovative vision solution to revolutionize health operations with advanced efficiency and scalability.",
        icon: "car"
    },
    {
        number: "077",
        title: "Next-Gen Cloud Rural Tech",
        description: "Innovative cloud solution to revolutionize rural operations with advanced efficiency and scalability.",
        icon: "lock"
    },
    {
        number: "078",
        title: "Next-Gen AI Water Tech",
        description: "Innovative ai solution to revolutionize water operations with advanced efficiency and scalability.",
        icon: "book"
    },
    {
        number: "079",
        title: "Next-Gen Vision Agriculture Tech",
        description: "Innovative vision solution to revolutionize agriculture operations with advanced efficiency and scalability.",
        icon: "cloud"
    },
    {
        number: "080",
        title: "Next-Gen Cloud Traffic Tech",
        description: "Innovative cloud solution to revolutionize traffic operations with advanced efficiency and scalability.",
        icon: "heart"
    },
    {
        number: "081",
        title: "Advanced Blockchain Retail System",
        description: "A cutting-edge blockchain approach to optimize retail processes and improve overall efficiency.",
        icon: "leaf"
    },
    {
        number: "082",
        title: "Decentralized Construction IoT Solution",
        description: "A cutting-edge iot approach to optimize construction processes and improve overall efficiency.",
        icon: "wind"
    },
    {
        number: "083",
        title: "Smart Quantum Education System",
        description: "A cutting-edge quantum approach to optimize education processes and improve overall efficiency.",
        icon: "building"
    },
    {
        number: "084",
        title: "Automated Mining Wearable Solution",
        description: "A cutting-edge wearable approach to optimize mining processes and improve overall efficiency.",
        icon: "sun"
    },
    {
        number: "085",
        title: "Proactive ML Logistics System",
        description: "A cutting-edge ml approach to optimize logistics processes and improve overall efficiency.",
        icon: "cloud"
    },
    {
        number: "086",
        title: "Integrated Quantum Elderly System",
        description: "A cutting-edge quantum approach to optimize elderly processes and improve overall efficiency.",
        icon: "package"
    },
    {
        number: "087",
        title: "Automated Drone Construction System",
        description: "A cutting-edge drone approach to optimize construction processes and improve overall efficiency.",
        icon: "car"
    },
    {
        number: "088",
        title: "Intelligent Marine Biometric Solution",
        description: "A cutting-edge biometric approach to optimize marine processes and improve overall efficiency.",
        icon: "activity"
    },
    {
        number: "089",
        title: "Smart Farming Big Data Solution",
        description: "A cutting-edge big data approach to optimize farming processes and improve overall efficiency.",
        icon: "zap"
    },
    {
        number: "090",
        title: "Advanced Robotic Retail System",
        description: "A cutting-edge robotic approach to optimize retail processes and improve overall efficiency.",
        icon: "cloud"
    },
    {
        number: "091",
        title: "Smart Education ML Solution",
        description: "A cutting-edge ml approach to optimize education processes and improve overall efficiency.",
        icon: "globe"
    },
    {
        number: "092",
        title: "Next-Gen Traffic Nanotech Solution",
        description: "A cutting-edge nanotech approach to optimize traffic processes and improve overall efficiency.",
        icon: "package"
    },
    {
        number: "093",
        title: "Eco-Friendly AI Retail System",
        description: "A cutting-edge ai approach to optimize retail processes and improve overall efficiency.",
        icon: "wifi"
    },
    {
        number: "094",
        title: "Dynamic AI Rural System",
        description: "A cutting-edge ai approach to optimize rural processes and improve overall efficiency.",
        icon: "lock"
    },
    {
        number: "095",
        title: "Integrated Nanotech Logistics System",
        description: "A cutting-edge nanotech approach to optimize logistics processes and improve overall efficiency.",
        icon: "activity"
    },
    {
        number: "096",
        title: "Dynamic Agriculture Big Data Solution",
        description: "A cutting-edge big data approach to optimize agriculture processes and improve overall efficiency.",
        icon: "shopping-cart"
    },
    {
        number: "097",
        title: "Connected Autonomous Construction System",
        description: "A cutting-edge autonomous approach to optimize construction processes and improve overall efficiency.",
        icon: "cloud"
    },
    {
        number: "098",
        title: "Eco-Friendly Blockchain Wildlife System",
        description: "A cutting-edge blockchain approach to optimize wildlife processes and improve overall efficiency.",
        icon: "home"
    },
    {
        number: "099",
        title: "Intelligent Aviation Quantum Solution",
        description: "A cutting-edge quantum approach to optimize aviation processes and improve overall efficiency.",
        icon: "car"
    },
    {
        number: "100",
        title: "Next-Gen Mining Cyber Solution",
        description: "A cutting-edge cyber approach to optimize mining processes and improve overall efficiency.",
        icon: "car"
    },
    {
        number: "101",
        title: "Automated AR/VR Disaster System",
        description: "A cutting-edge ar/vr approach to optimize disaster processes and improve overall efficiency.",
        icon: "database"
    },
    {
        number: "102",
        title: "Eco-Friendly 5G Construction System",
        description: "A cutting-edge 5g approach to optimize construction processes and improve overall efficiency.",
        icon: "plane"
    },
    {
        number: "103",
        title: "Smart Drone Traffic System",
        description: "A cutting-edge drone approach to optimize traffic processes and improve overall efficiency.",
        icon: "package"
    },
    {
        number: "104",
        title: "Proactive Energy AI Solution",
        description: "A cutting-edge ai approach to optimize energy processes and improve overall efficiency.",
        icon: "wifi"
    },
    {
        number: "105",
        title: "Intelligent Biometric Smart City System",
        description: "A cutting-edge biometric approach to optimize smart city processes and improve overall efficiency.",
        icon: "book"
    },
    {
        number: "106",
        title: "Automated Big Data Smart City System",
        description: "A cutting-edge big data approach to optimize smart city processes and improve overall efficiency.",
        icon: "heart"
    },
    {
        number: "107",
        title: "Eco-Friendly Health AI Solution",
        description: "A cutting-edge ai approach to optimize health processes and improve overall efficiency.",
        icon: "heart"
    },
    {
        number: "108",
        title: "Integrated Blockchain Education System",
        description: "A cutting-edge blockchain approach to optimize education processes and improve overall efficiency.",
        icon: "zap"
    },
    {
        number: "109",
        title: "Integrated AI Retail System",
        description: "A cutting-edge ai approach to optimize retail processes and improve overall efficiency.",
        icon: "plane"
    },
    {
        number: "110",
        title: "Decentralized Cyber Banking System",
        description: "A cutting-edge cyber approach to optimize banking processes and improve overall efficiency.",
        icon: "heart"
    },
    {
        number: "111",
        title: "Connected Quantum Traffic System",
        description: "A cutting-edge quantum approach to optimize traffic processes and improve overall efficiency.",
        icon: "wifi"
    },
    {
        number: "112",
        title: "Smart Construction Biometric Solution",
        description: "A cutting-edge biometric approach to optimize construction processes and improve overall efficiency.",
        icon: "shield-check"
    },
    {
        number: "113",
        title: "Next-Gen Cyber Weather System",
        description: "A cutting-edge cyber approach to optimize weather processes and improve overall efficiency.",
        icon: "trash-2"
    },
    {
        number: "114",
        title: "Intelligent Sports Quantum Solution",
        description: "A cutting-edge quantum approach to optimize sports processes and improve overall efficiency.",
        icon: "plane"
    },
    {
        number: "115",
        title: "Intelligent Rural Drone Solution",
        description: "A cutting-edge drone approach to optimize rural processes and improve overall efficiency.",
        icon: "droplets"
    },
    {
        number: "116",
        title: "Automated Nanotech Water System",
        description: "A cutting-edge nanotech approach to optimize water processes and improve overall efficiency.",
        icon: "credit-card"
    },
    {
        number: "117",
        title: "Smart Wildlife Edge Solution",
        description: "A cutting-edge edge approach to optimize wildlife processes and improve overall efficiency.",
        icon: "tractor"
    },
    {
        number: "118",
        title: "Connected Robotic Sports System",
        description: "A cutting-edge robotic approach to optimize sports processes and improve overall efficiency.",
        icon: "activity"
    },
    {
        number: "119",
        title: "Proactive Space Sensor Solution",
        description: "A cutting-edge sensor approach to optimize space processes and improve overall efficiency.",
        icon: "trash-2"
    },
    {
        number: "120",
        title: "Integrated Rural IoT Solution",
        description: "A cutting-edge iot approach to optimize rural processes and improve overall efficiency.",
        icon: "car"
    },
    {
        number: "121",
        title: "Intelligent Biometric Waste System",
        description: "A cutting-edge biometric approach to optimize waste processes and improve overall efficiency.",
        icon: "shield-check"
    },
    {
        number: "122",
        title: "Eco-Friendly Agriculture IoT Solution",
        description: "A cutting-edge iot approach to optimize agriculture processes and improve overall efficiency.",
        icon: "zap"
    },
    {
        number: "123",
        title: "Automated Big Data Elderly System",
        description: "A cutting-edge big data approach to optimize elderly processes and improve overall efficiency.",
        icon: "credit-card"
    },
    {
        number: "124",
        title: "Connected Banking Wearable Solution",
        description: "A cutting-edge wearable approach to optimize banking processes and improve overall efficiency.",
        icon: "cpu"
    },
    {
        number: "125",
        title: "Automated Elderly Biometric Solution",
        description: "A cutting-edge biometric approach to optimize elderly processes and improve overall efficiency.",
        icon: "database"
    },
    {
        number: "126",
        title: "Smart Autonomous Health System",
        description: "A cutting-edge autonomous approach to optimize health processes and improve overall efficiency.",
        icon: "cpu"
    },
    {
        number: "127",
        title: "Integrated Nanotech Sports System",
        description: "A cutting-edge nanotech approach to optimize sports processes and improve overall efficiency.",
        icon: "activity"
    },
    {
        number: "128",
        title: "Automated Logistics Nanotech Solution",
        description: "A cutting-edge nanotech approach to optimize logistics processes and improve overall efficiency.",
        icon: "home"
    },
    {
        number: "129",
        title: "Intelligent AI Sports System",
        description: "A cutting-edge ai approach to optimize sports processes and improve overall efficiency.",
        icon: "credit-card"
    },
    {
        number: "130",
        title: "Next-Gen Cyber Mining System",
        description: "A cutting-edge cyber approach to optimize mining processes and improve overall efficiency.",
        icon: "shopping-cart"
    },
    {
        number: "131",
        title: "Smart Autonomous Waste System",
        description: "A cutting-edge autonomous approach to optimize waste processes and improve overall efficiency.",
        icon: "leaf"
    },
    {
        number: "132",
        title: "Connected Waste ML Solution",
        description: "A cutting-edge ml approach to optimize waste processes and improve overall efficiency.",
        icon: "car"
    },
    {
        number: "133",
        title: "Proactive Health Cyber Solution",
        description: "A cutting-edge cyber approach to optimize health processes and improve overall efficiency.",
        icon: "database"
    },
    {
        number: "134",
        title: "Integrated Biometric Health System",
        description: "A cutting-edge biometric approach to optimize health processes and improve overall efficiency.",
        icon: "anchor"
    },
    {
        number: "135",
        title: "Next-Gen Edge Aviation System",
        description: "A cutting-edge edge approach to optimize aviation processes and improve overall efficiency.",
        icon: "lock"
    },
    {
        number: "136",
        title: "Integrated Disaster IoT Solution",
        description: "A cutting-edge iot approach to optimize disaster processes and improve overall efficiency.",
        icon: "shield-check"
    },
    {
        number: "137",
        title: "Integrated Education Big Data Solution",
        description: "A cutting-edge big data approach to optimize education processes and improve overall efficiency.",
        icon: "wifi"
    },
    {
        number: "138",
        title: "Smart Cloud Agriculture System",
        description: "A cutting-edge cloud approach to optimize agriculture processes and improve overall efficiency.",
        icon: "car"
    },
    {
        number: "139",
        title: "Advanced Pollution 5G Solution",
        description: "A cutting-edge 5g approach to optimize pollution processes and improve overall efficiency.",
        icon: "trash-2"
    },
    {
        number: "140",
        title: "Dynamic Edge Smart City System",
        description: "A cutting-edge edge approach to optimize smart city processes and improve overall efficiency.",
        icon: "leaf"
    },
    {
        number: "141",
        title: "Next-Gen Robotic Logistics System",
        description: "A cutting-edge robotic approach to optimize logistics processes and improve overall efficiency.",
        icon: "anchor"
    },
    {
        number: "142",
        title: "Automated Robotic Aviation System",
        description: "A cutting-edge robotic approach to optimize aviation processes and improve overall efficiency.",
        icon: "truck"
    },
    {
        number: "143",
        title: "Decentralized IoT Rural System",
        description: "A cutting-edge iot approach to optimize rural processes and improve overall efficiency.",
        icon: "cloud"
    },
    {
        number: "144",
        title: "Intelligent IoT Space System",
        description: "A cutting-edge iot approach to optimize space processes and improve overall efficiency.",
        icon: "building"
    },
    {
        number: "145",
        title: "Dynamic Sports Blockchain Solution",
        description: "A cutting-edge blockchain approach to optimize sports processes and improve overall efficiency.",
        icon: "sun"
    },
    {
        number: "146",
        title: "Intelligent ML Mining System",
        description: "A cutting-edge ml approach to optimize mining processes and improve overall efficiency.",
        icon: "lock"
    },
    {
        number: "147",
        title: "Next-Gen Big Data Elderly System",
        description: "A cutting-edge big data approach to optimize elderly processes and improve overall efficiency.",
        icon: "plane"
    },
    {
        number: "148",
        title: "Decentralized ML Security System",
        description: "A cutting-edge ml approach to optimize security processes and improve overall efficiency.",
        icon: "book"
    },
    {
        number: "149",
        title: "Decentralized 5G Traffic System",
        description: "A cutting-edge 5g approach to optimize traffic processes and improve overall efficiency.",
        icon: "book"
    },
    {
        number: "150",
        title: "Eco-Friendly Education Wearable Solution",
        description: "A cutting-edge wearable approach to optimize education processes and improve overall efficiency.",
        icon: "trash-2"
    },
    {
        number: "151",
        title: "Proactive Waste Autonomous Solution",
        description: "A cutting-edge autonomous approach to optimize waste processes and improve overall efficiency.",
        icon: "zap"
    },
    {
        number: "152",
        title: "Smart Drone Sports System",
        description: "A cutting-edge drone approach to optimize sports processes and improve overall efficiency.",
        icon: "wind"
    },
    {
        number: "153",
        title: "Automated Waste Edge Solution",
        description: "A cutting-edge edge approach to optimize waste processes and improve overall efficiency.",
        icon: "activity"
    },
    {
        number: "154",
        title: "Smart Cyber Security System",
        description: "A cutting-edge cyber approach to optimize security processes and improve overall efficiency.",
        icon: "wind"
    },
    {
        number: "155",
        title: "Next-Gen Biometric Health System",
        description: "A cutting-edge biometric approach to optimize health processes and improve overall efficiency.",
        icon: "cpu"
    },
    {
        number: "156",
        title: "Decentralized Drone Security System",
        description: "A cutting-edge drone approach to optimize security processes and improve overall efficiency.",
        icon: "heart"
    },
    {
        number: "157",
        title: "Advanced Security IoT Solution",
        description: "A cutting-edge iot approach to optimize security processes and improve overall efficiency.",
        icon: "wind"
    },
    {
        number: "158",
        title: "Eco-Friendly Wearable Space System",
        description: "A cutting-edge wearable approach to optimize space processes and improve overall efficiency.",
        icon: "sun"
    },
    {
        number: "159",
        title: "Automated Mining Cyber Solution",
        description: "A cutting-edge cyber approach to optimize mining processes and improve overall efficiency.",
        icon: "credit-card"
    },
    {
        number: "160",
        title: "Advanced Education AR/VR Solution",
        description: "A cutting-edge ar/vr approach to optimize education processes and improve overall efficiency.",
        icon: "anchor"
    },
    {
        number: "161",
        title: "Dynamic Aviation Edge Solution",
        description: "A cutting-edge edge approach to optimize aviation processes and improve overall efficiency.",
        icon: "shield-check"
    },
    {
        number: "162",
        title: "Integrated Weather Autonomous Solution",
        description: "A cutting-edge autonomous approach to optimize weather processes and improve overall efficiency.",
        icon: "database"
    },
    {
        number: "163",
        title: "Next-Gen AR/VR Logistics System",
        description: "A cutting-edge ar/vr approach to optimize logistics processes and improve overall efficiency.",
        icon: "lock"
    },
    {
        number: "164",
        title: "Automated AR/VR Water System",
        description: "A cutting-edge ar/vr approach to optimize water processes and improve overall efficiency.",
        icon: "lock"
    },
    {
        number: "165",
        title: "Next-Gen Weather ML Solution",
        description: "A cutting-edge ml approach to optimize weather processes and improve overall efficiency.",
        icon: "tractor"
    },
    {
        number: "166",
        title: "Eco-Friendly Logistics Quantum Solution",
        description: "A cutting-edge quantum approach to optimize logistics processes and improve overall efficiency.",
        icon: "cloud"
    },
    {
        number: "167",
        title: "Decentralized Nanotech Smart City System",
        description: "A cutting-edge nanotech approach to optimize smart city processes and improve overall efficiency.",
        icon: "shopping-cart"
    },
    {
        number: "168",
        title: "Connected Pollution AR/VR Solution",
        description: "A cutting-edge ar/vr approach to optimize pollution processes and improve overall efficiency.",
        icon: "globe"
    },
    {
        number: "169",
        title: "Proactive Mining 5G Solution",
        description: "A cutting-edge 5g approach to optimize mining processes and improve overall efficiency.",
        icon: "credit-card"
    },
    {
        number: "170",
        title: "Automated Nanotech Space System",
        description: "A cutting-edge nanotech approach to optimize space processes and improve overall efficiency.",
        icon: "leaf"
    },
    {
        number: "171",
        title: "Intelligent Sports Nanotech Solution",
        description: "A cutting-edge nanotech approach to optimize sports processes and improve overall efficiency.",
        icon: "leaf"
    },
    {
        number: "172",
        title: "Smart Drone Energy System",
        description: "A cutting-edge drone approach to optimize energy processes and improve overall efficiency.",
        icon: "plane"
    },
    {
        number: "173",
        title: "Connected Energy Drone Solution",
        description: "A cutting-edge drone approach to optimize energy processes and improve overall efficiency.",
        icon: "activity"
    },
    {
        number: "174",
        title: "Intelligent Nanotech Energy System",
        description: "A cutting-edge nanotech approach to optimize energy processes and improve overall efficiency.",
        icon: "cloud"
    },
    {
        number: "175",
        title: "Advanced Cyber Disaster System",
        description: "A cutting-edge cyber approach to optimize disaster processes and improve overall efficiency.",
        icon: "lock"
    },
    {
        number: "176",
        title: "Smart Robotic Waste System",
        description: "A cutting-edge robotic approach to optimize waste processes and improve overall efficiency.",
        icon: "leaf"
    },
    {
        number: "177",
        title: "Integrated Robotic Aviation System",
        description: "A cutting-edge robotic approach to optimize aviation processes and improve overall efficiency.",
        icon: "anchor"
    },
    {
        number: "178",
        title: "Decentralized ML Pollution System",
        description: "A cutting-edge ml approach to optimize pollution processes and improve overall efficiency.",
        icon: "wind"
    },
    {
        number: "179",
        title: "Advanced Drone Sports System",
        description: "A cutting-edge drone approach to optimize sports processes and improve overall efficiency.",
        icon: "globe"
    },
    {
        number: "180",
        title: "Connected Biometric Retail System",
        description: "A cutting-edge biometric approach to optimize retail processes and improve overall efficiency.",
        icon: "car"
    },
    {
        number: "181",
        title: "Intelligent Retail Cloud Solution",
        description: "A cutting-edge cloud approach to optimize retail processes and improve overall efficiency.",
        icon: "home"
    },
    {
        number: "182",
        title: "Smart Agriculture Biometric Solution",
        description: "A cutting-edge biometric approach to optimize agriculture processes and improve overall efficiency.",
        icon: "tractor"
    },
    {
        number: "183",
        title: "Dynamic Nanotech Space System",
        description: "A cutting-edge nanotech approach to optimize space processes and improve overall efficiency.",
        icon: "droplets"
    },
    {
        number: "184",
        title: "Advanced Rural Cloud Solution",
        description: "A cutting-edge cloud approach to optimize rural processes and improve overall efficiency.",
        icon: "package"
    },
    {
        number: "185",
        title: "Proactive Blockchain Security System",
        description: "A cutting-edge blockchain approach to optimize security processes and improve overall efficiency.",
        icon: "credit-card"
    },
    {
        number: "186",
        title: "Connected Biometric Energy System",
        description: "A cutting-edge biometric approach to optimize energy processes and improve overall efficiency.",
        icon: "cpu"
    },
    {
        number: "187",
        title: "Proactive AR/VR Rural System",
        description: "A cutting-edge ar/vr approach to optimize rural processes and improve overall efficiency.",
        icon: "shopping-cart"
    },
    {
        number: "188",
        title: "Automated Health Blockchain Solution",
        description: "A cutting-edge blockchain approach to optimize health processes and improve overall efficiency.",
        icon: "truck"
    },
    {
        number: "189",
        title: "Intelligent Wildlife 5G Solution",
        description: "A cutting-edge 5g approach to optimize wildlife processes and improve overall efficiency.",
        icon: "truck"
    },
    {
        number: "190",
        title: "Connected Agriculture 5G Solution",
        description: "A cutting-edge 5g approach to optimize agriculture processes and improve overall efficiency.",
        icon: "cpu"
    },
    {
        number: "191",
        title: "Next-Gen Farming Drone Solution",
        description: "A cutting-edge drone approach to optimize farming processes and improve overall efficiency.",
        icon: "credit-card"
    },
    {
        number: "192",
        title: "Automated Edge Water System",
        description: "A cutting-edge edge approach to optimize water processes and improve overall efficiency.",
        icon: "shopping-cart"
    },
    {
        number: "193",
        title: "Proactive Space AR/VR Solution",
        description: "A cutting-edge ar/vr approach to optimize space processes and improve overall efficiency.",
        icon: "building"
    },
    {
        number: "194",
        title: "Automated Aviation Vision Solution",
        description: "A cutting-edge vision approach to optimize aviation processes and improve overall efficiency.",
        icon: "globe"
    },
    {
        number: "195",
        title: "Eco-Friendly Farming Quantum Solution",
        description: "A cutting-edge quantum approach to optimize farming processes and improve overall efficiency.",
        icon: "wind"
    },
    {
        number: "196",
        title: "Automated Banking ML Solution",
        description: "A cutting-edge ml approach to optimize banking processes and improve overall efficiency.",
        icon: "droplets"
    },
    {
        number: "197",
        title: "Decentralized Rural Big Data Solution",
        description: "A cutting-edge big data approach to optimize rural processes and improve overall efficiency.",
        icon: "lock"
    },
    {
        number: "198",
        title: "Proactive Predictive Water System",
        description: "A cutting-edge predictive approach to optimize water processes and improve overall efficiency.",
        icon: "activity"
    },
    {
        number: "199",
        title: "Integrated Biometric Water System",
        description: "A cutting-edge biometric approach to optimize water processes and improve overall efficiency.",
        icon: "book"
    },
    {
        number: "200",
        title: "Intelligent Mining Vision Solution",
        description: "A cutting-edge vision approach to optimize mining processes and improve overall efficiency.",
        icon: "book"
    },
    {
        number: "201",
        title: "Decentralized Sensor Logistics System",
        description: "A cutting-edge sensor approach to optimize logistics processes and improve overall efficiency.",
        icon: "trash-2"
    },
    {
        number: "202",
        title: "Smart Mining 5G Solution",
        description: "A cutting-edge 5g approach to optimize mining processes and improve overall efficiency.",
        icon: "plane"
    },
    {
        number: "203",
        title: "Eco-Friendly Security ML Solution",
        description: "A cutting-edge ml approach to optimize security processes and improve overall efficiency.",
        icon: "database"
    },
    {
        number: "204",
        title: "Advanced Aviation AI Solution",
        description: "A cutting-edge ai approach to optimize aviation processes and improve overall efficiency.",
        icon: "sun"
    },
    {
        number: "205",
        title: "Integrated Robotic Logistics System",
        description: "A cutting-edge robotic approach to optimize logistics processes and improve overall efficiency.",
        icon: "home"
    },
    {
        number: "206",
        title: "Advanced Jet Engine Simulator",
        description: "Interactive working model explaining the aerodynamics, combustion, and propulsion mechanics of a modern turbofan jet engine.",
        icon: "rocket"
    },
    {
        number: "207",
        title: "Chemical Reaction Analyzer",
        description: "IoT setup that monitors pH, temperature, and color changes during complex chemical reactions in real-time.",
        icon: "flask-conical"
    },
    {
        number: "208",
        title: "Green Chemistry Bio-Plastics",
        description: "Developing biodegradable plastics from agricultural waste using eco-friendly chemical processes.",
        icon: "leaf"
    },
    {
        number: "209",
        title: "Rocket Propulsion Test Stand",
        description: "A safe, miniature testing rig to measure thrust and efficiency of various solid and liquid propellants.",
        icon: "flame"
    },
    {
        number: "210",
        title: "Smart Periodic Table",
        description: "An interactive AR-powered periodic table that visually demonstrates electron configurations and element properties.",
        icon: "atom"
    },
    {
        number: "211",
        title: "Aerospace Wind Tunnel",
        description: "A homemade wind tunnel equipped with sensors to study lift and drag on various aerofoil designs.",
        icon: "wind"
    },
    {
        number: "212",
        title: "Polymer Synthesis Lab",
        description: "Exploring the creation of new synthetic polymers with specialized thermal and electrical properties.",
        icon: "beaker"
    },
    {
        number: "213",
        title: "Quantum Physics Demonstrator",
        description: "A simple apparatus to demonstrate wave-particle duality and basic quantum mechanics principles.",
        icon: "zap"
    },
    {
        number: "214",
        title: "Genetics CRISPR Model",
        description: "An interactive digital and physical model explaining how CRISPR-Cas9 edits genetic code.",
        icon: "activity"
    },
    {
        number: "215",
        title: "Robotic Exoskeleton Arm",
        description: "A mechanical prototype that augments human strength using hydraulic and electronic actuators.",
        icon: "settings"
    },
    {
        number: "216",
        title: "Experimental Chemistry Testing",
        description: "A comprehensive project focusing on experimental chemistry testing to discover new scientific methodologies and practical applications.",
        icon: "atom"
    },
    {
        number: "217",
        title: "Analytical Physics Simulation",
        description: "A comprehensive project focusing on analytical physics simulation to discover new scientific methodologies and practical applications.",
        icon: "compass"
    },
    {
        number: "218",
        title: "Analytical Acoustics Prototyping",
        description: "A comprehensive project focusing on analytical acoustics prototyping to discover new scientific methodologies and practical applications.",
        icon: "flask-conical"
    },
    {
        number: "219",
        title: "Bio-inspired Mechanical Engineering Diagnostics",
        description: "A comprehensive project focusing on bio-inspired mechanical engineering diagnostics to discover new scientific methodologies and practical applications.",
        icon: "zap"
    },
    {
        number: "220",
        title: "Synthetic Bio-Tech Mapping",
        description: "A comprehensive project focusing on synthetic bio-tech mapping to discover new scientific methodologies and practical applications.",
        icon: "cpu"
    },
    {
        number: "221",
        title: "Experimental Acoustics Testing",
        description: "A comprehensive project focusing on experimental acoustics testing to discover new scientific methodologies and practical applications.",
        icon: "eye"
    },
    {
        number: "222",
        title: "Computational Optics Monitoring",
        description: "A comprehensive project focusing on computational optics monitoring to discover new scientific methodologies and practical applications.",
        icon: "cpu"
    },
    {
        number: "223",
        title: "Theoretical Physics Synthesis",
        description: "A comprehensive project focusing on theoretical physics synthesis to discover new scientific methodologies and practical applications.",
        icon: "zap"
    },
    {
        number: "224",
        title: "Computational Physics Exploration",
        description: "A comprehensive project focusing on computational physics exploration to discover new scientific methodologies and practical applications.",
        icon: "globe"
    },
    {
        number: "225",
        title: "Advanced Optics Mapping",
        description: "A comprehensive project focusing on advanced optics mapping to discover new scientific methodologies and practical applications.",
        icon: "activity"
    },
    {
        number: "226",
        title: "Kinetic Bio-Tech Synthesis",
        description: "A comprehensive project focusing on kinetic bio-tech synthesis to discover new scientific methodologies and practical applications.",
        icon: "cpu"
    },
    {
        number: "227",
        title: "Analytical Oceanography Prototyping",
        description: "A comprehensive project focusing on analytical oceanography prototyping to discover new scientific methodologies and practical applications.",
        icon: "globe"
    },
    {
        number: "228",
        title: "Theoretical Chemistry Exploration",
        description: "A comprehensive project focusing on theoretical chemistry exploration to discover new scientific methodologies and practical applications.",
        icon: "compass"
    },
    {
        number: "229",
        title: "Kinetic Materials Science Exploration",
        description: "A comprehensive project focusing on kinetic materials science exploration to discover new scientific methodologies and practical applications.",
        icon: "cpu"
    },
    {
        number: "230",
        title: "Computational Mechanical Engineering Testing",
        description: "A comprehensive project focusing on computational mechanical engineering testing to discover new scientific methodologies and practical applications.",
        icon: "eye"
    },
    {
        number: "231",
        title: "Synthetic Robotics Analysis",
        description: "A comprehensive project focusing on synthetic robotics analysis to discover new scientific methodologies and practical applications.",
        icon: "rocket"
    },
    {
        number: "232",
        title: "Synthetic Mechanical Engineering Monitoring",
        description: "A comprehensive project focusing on synthetic mechanical engineering monitoring to discover new scientific methodologies and practical applications.",
        icon: "cpu"
    },
    {
        number: "233",
        title: "Bio-inspired Chemistry Synthesis",
        description: "A comprehensive project focusing on bio-inspired chemistry synthesis to discover new scientific methodologies and practical applications.",
        icon: "wind"
    },
    {
        number: "234",
        title: "Kinetic Optics Simulation",
        description: "A comprehensive project focusing on kinetic optics simulation to discover new scientific methodologies and practical applications.",
        icon: "rocket"
    },
    {
        number: "235",
        title: "Advanced Physics Mapping",
        description: "A comprehensive project focusing on advanced physics mapping to discover new scientific methodologies and practical applications.",
        icon: "atom"
    },
    {
        number: "236",
        title: "Advanced Bio-Tech Prototyping",
        description: "A comprehensive project focusing on advanced bio-tech prototyping to discover new scientific methodologies and practical applications.",
        icon: "flame"
    },
    {
        number: "237",
        title: "Experimental Oceanography Mapping",
        description: "A comprehensive project focusing on experimental oceanography mapping to discover new scientific methodologies and practical applications.",
        icon: "settings"
    },
    {
        number: "238",
        title: "Analytical Acoustics Diagnostics",
        description: "A comprehensive project focusing on analytical acoustics diagnostics to discover new scientific methodologies and practical applications.",
        icon: "globe"
    },
    {
        number: "239",
        title: "Thermodynamic Mechanical Engineering Diagnostics",
        description: "A comprehensive project focusing on thermodynamic mechanical engineering diagnostics to discover new scientific methodologies and practical applications.",
        icon: "flame"
    },
    {
        number: "240",
        title: "Kinetic Materials Science Monitoring",
        description: "A comprehensive project focusing on kinetic materials science monitoring to discover new scientific methodologies and practical applications.",
        icon: "crosshair"
    },
    {
        number: "241",
        title: "Applied Materials Science Diagnostics",
        description: "A comprehensive project focusing on applied materials science diagnostics to discover new scientific methodologies and practical applications.",
        icon: "wind"
    },
    {
        number: "242",
        title: "Kinetic Optics Mapping",
        description: "A comprehensive project focusing on kinetic optics mapping to discover new scientific methodologies and practical applications.",
        icon: "beaker"
    },
    {
        number: "243",
        title: "Experimental Materials Science Mapping",
        description: "A comprehensive project focusing on experimental materials science mapping to discover new scientific methodologies and practical applications.",
        icon: "eye"
    },
    {
        number: "244",
        title: "Kinetic Geology Testing",
        description: "A comprehensive project focusing on kinetic geology testing to discover new scientific methodologies and practical applications.",
        icon: "settings"
    },
    {
        number: "245",
        title: "Kinetic Genetics Prototyping",
        description: "A comprehensive project focusing on kinetic genetics prototyping to discover new scientific methodologies and practical applications.",
        icon: "wind"
    },
    {
        number: "246",
        title: "Experimental Oceanography Optimization",
        description: "A comprehensive project focusing on experimental oceanography optimization to discover new scientific methodologies and practical applications.",
        icon: "microscope"
    },
    {
        number: "247",
        title: "Kinetic Acoustics Monitoring",
        description: "A comprehensive project focusing on kinetic acoustics monitoring to discover new scientific methodologies and practical applications.",
        icon: "rocket"
    },
    {
        number: "248",
        title: "Theoretical Oceanography Prototyping",
        description: "A comprehensive project focusing on theoretical oceanography prototyping to discover new scientific methodologies and practical applications.",
        icon: "flame"
    },
    {
        number: "249",
        title: "Analytical Mechanical Engineering Synthesis",
        description: "A comprehensive project focusing on analytical mechanical engineering synthesis to discover new scientific methodologies and practical applications.",
        icon: "eye"
    },
    {
        number: "250",
        title: "Thermodynamic Optics Exploration",
        description: "A comprehensive project focusing on thermodynamic optics exploration to discover new scientific methodologies and practical applications.",
        icon: "zap"
    },
    {
        number: "251",
        title: "Theoretical Physics Monitoring",
        description: "A comprehensive project focusing on theoretical physics monitoring to discover new scientific methodologies and practical applications.",
        icon: "compass"
    },
    {
        number: "252",
        title: "Thermodynamic Bio-Tech Testing",
        description: "A comprehensive project focusing on thermodynamic bio-tech testing to discover new scientific methodologies and practical applications.",
        icon: "settings"
    },
    {
        number: "253",
        title: "Computational Aerospace Prototyping",
        description: "A comprehensive project focusing on computational aerospace prototyping to discover new scientific methodologies and practical applications.",
        icon: "beaker"
    },
    {
        number: "254",
        title: "Applied Robotics Analysis",
        description: "A comprehensive project focusing on applied robotics analysis to discover new scientific methodologies and practical applications.",
        icon: "eye"
    },
    {
        number: "255",
        title: "Thermodynamic Robotics Testing",
        description: "A comprehensive project focusing on thermodynamic robotics testing to discover new scientific methodologies and practical applications.",
        icon: "zap"
    },
    {
        number: "256",
        title: "Kinetic Mechanical Engineering Optimization",
        description: "A comprehensive project focusing on kinetic mechanical engineering optimization to discover new scientific methodologies and practical applications.",
        icon: "zap"
    },
    {
        number: "257",
        title: "Bio-inspired Geology Analysis",
        description: "A comprehensive project focusing on bio-inspired geology analysis to discover new scientific methodologies and practical applications.",
        icon: "zap"
    },
    {
        number: "258",
        title: "Thermodynamic Astronomy Exploration",
        description: "A comprehensive project focusing on thermodynamic astronomy exploration to discover new scientific methodologies and practical applications.",
        icon: "target"
    },
    {
        number: "259",
        title: "Applied Optics Exploration",
        description: "A comprehensive project focusing on applied optics exploration to discover new scientific methodologies and practical applications.",
        icon: "wind"
    },
    {
        number: "260",
        title: "Experimental Bio-Tech Analysis",
        description: "A comprehensive project focusing on experimental bio-tech analysis to discover new scientific methodologies and practical applications.",
        icon: "atom"
    },
    {
        number: "261",
        title: "Thermodynamic Astronomy Prototyping",
        description: "A comprehensive project focusing on thermodynamic astronomy prototyping to discover new scientific methodologies and practical applications.",
        icon: "atom"
    },
    {
        number: "262",
        title: "Analytical Nanotechnology Prototyping",
        description: "A comprehensive project focusing on analytical nanotechnology prototyping to discover new scientific methodologies and practical applications.",
        icon: "wind"
    },
    {
        number: "263",
        title: "Thermodynamic Mechanical Engineering Exploration",
        description: "A comprehensive project focusing on thermodynamic mechanical engineering exploration to discover new scientific methodologies and practical applications.",
        icon: "crosshair"
    },
    {
        number: "264",
        title: "Computational Chemistry Analysis",
        description: "A comprehensive project focusing on computational chemistry analysis to discover new scientific methodologies and practical applications.",
        icon: "beaker"
    },
    {
        number: "265",
        title: "Kinetic Aerospace Optimization",
        description: "A comprehensive project focusing on kinetic aerospace optimization to discover new scientific methodologies and practical applications.",
        icon: "activity"
    },
    {
        number: "266",
        title: "Kinetic Aerospace Exploration",
        description: "A comprehensive project focusing on kinetic aerospace exploration to discover new scientific methodologies and practical applications.",
        icon: "globe"
    },
    {
        number: "267",
        title: "Experimental Oceanography Diagnostics",
        description: "A comprehensive project focusing on experimental oceanography diagnostics to discover new scientific methodologies and practical applications.",
        icon: "atom"
    },
    {
        number: "268",
        title: "Thermodynamic Genetics Exploration",
        description: "A comprehensive project focusing on thermodynamic genetics exploration to discover new scientific methodologies and practical applications.",
        icon: "globe"
    },
    {
        number: "269",
        title: "Bio-inspired Materials Science Analysis",
        description: "A comprehensive project focusing on bio-inspired materials science analysis to discover new scientific methodologies and practical applications.",
        icon: "compass"
    },
    {
        number: "270",
        title: "Synthetic Physics Monitoring",
        description: "A comprehensive project focusing on synthetic physics monitoring to discover new scientific methodologies and practical applications.",
        icon: "cpu"
    },
    {
        number: "271",
        title: "Experimental Oceanography Exploration",
        description: "A comprehensive project focusing on experimental oceanography exploration to discover new scientific methodologies and practical applications.",
        icon: "atom"
    },
    {
        number: "272",
        title: "Kinetic Mechanical Engineering Simulation",
        description: "A comprehensive project focusing on kinetic mechanical engineering simulation to discover new scientific methodologies and practical applications.",
        icon: "zap"
    },
    {
        number: "273",
        title: "Theoretical Oceanography Testing",
        description: "A comprehensive project focusing on theoretical oceanography testing to discover new scientific methodologies and practical applications.",
        icon: "target"
    },
    {
        number: "274",
        title: "Advanced Materials Science Prototyping",
        description: "A comprehensive project focusing on advanced materials science prototyping to discover new scientific methodologies and practical applications.",
        icon: "cpu"
    },
    {
        number: "275",
        title: "Kinetic Physics Analysis",
        description: "A comprehensive project focusing on kinetic physics analysis to discover new scientific methodologies and practical applications.",
        icon: "cpu"
    },
    {
        number: "276",
        title: "Synthetic Materials Science Testing",
        description: "A comprehensive project focusing on synthetic materials science testing to discover new scientific methodologies and practical applications.",
        icon: "compass"
    },
    {
        number: "277",
        title: "Theoretical Chemistry Monitoring",
        description: "A comprehensive project focusing on theoretical chemistry monitoring to discover new scientific methodologies and practical applications.",
        icon: "compass"
    },
    {
        number: "278",
        title: "Advanced Physics Diagnostics",
        description: "A comprehensive project focusing on advanced physics diagnostics to discover new scientific methodologies and practical applications.",
        icon: "crosshair"
    },
    {
        number: "279",
        title: "Analytical Genetics Prototyping",
        description: "A comprehensive project focusing on analytical genetics prototyping to discover new scientific methodologies and practical applications.",
        icon: "crosshair"
    },
    {
        number: "280",
        title: "Experimental Robotics Mapping",
        description: "A comprehensive project focusing on experimental robotics mapping to discover new scientific methodologies and practical applications.",
        icon: "atom"
    },
    {
        number: "281",
        title: "Thermodynamic Nanotechnology Testing",
        description: "A comprehensive project focusing on thermodynamic nanotechnology testing to discover new scientific methodologies and practical applications.",
        icon: "flame"
    },
    {
        number: "282",
        title: "Theoretical Mechanical Engineering Exploration",
        description: "A comprehensive project focusing on theoretical mechanical engineering exploration to discover new scientific methodologies and practical applications.",
        icon: "crosshair"
    },
    {
        number: "283",
        title: "Experimental Materials Science Optimization",
        description: "A comprehensive project focusing on experimental materials science optimization to discover new scientific methodologies and practical applications.",
        icon: "cpu"
    },
    {
        number: "284",
        title: "Applied Aerospace Mapping",
        description: "A comprehensive project focusing on applied aerospace mapping to discover new scientific methodologies and practical applications.",
        icon: "microscope"
    },
    {
        number: "285",
        title: "Computational Bio-Tech Testing",
        description: "A comprehensive project focusing on computational bio-tech testing to discover new scientific methodologies and practical applications.",
        icon: "beaker"
    },
    {
        number: "286",
        title: "Advanced Materials Science Optimization",
        description: "A comprehensive project focusing on advanced materials science optimization to discover new scientific methodologies and practical applications.",
        icon: "rocket"
    },
    {
        number: "287",
        title: "Advanced Materials Science Monitoring",
        description: "A comprehensive project focusing on advanced materials science monitoring to discover new scientific methodologies and practical applications.",
        icon: "microscope"
    },
    {
        number: "288",
        title: "Applied Geology Analysis",
        description: "A comprehensive project focusing on applied geology analysis to discover new scientific methodologies and practical applications.",
        icon: "settings"
    },
    {
        number: "289",
        title: "Applied Genetics Mapping",
        description: "A comprehensive project focusing on applied genetics mapping to discover new scientific methodologies and practical applications.",
        icon: "compass"
    },
    {
        number: "290",
        title: "Kinetic Materials Science Optimization",
        description: "A comprehensive project focusing on kinetic materials science optimization to discover new scientific methodologies and practical applications.",
        icon: "compass"
    },
    {
        number: "291",
        title: "Synthetic Bio-Tech Analysis",
        description: "A comprehensive project focusing on synthetic bio-tech analysis to discover new scientific methodologies and practical applications.",
        icon: "beaker"
    },
    {
        number: "292",
        title: "Advanced Robotics Testing",
        description: "A comprehensive project focusing on advanced robotics testing to discover new scientific methodologies and practical applications.",
        icon: "zap"
    },
    {
        number: "293",
        title: "Computational Robotics Monitoring",
        description: "A comprehensive project focusing on computational robotics monitoring to discover new scientific methodologies and practical applications.",
        icon: "rocket"
    },
    {
        number: "294",
        title: "Experimental Mechanical Engineering Monitoring",
        description: "A comprehensive project focusing on experimental mechanical engineering monitoring to discover new scientific methodologies and practical applications.",
        icon: "wind"
    },
    {
        number: "295",
        title: "Synthetic Robotics Optimization",
        description: "A comprehensive project focusing on synthetic robotics optimization to discover new scientific methodologies and practical applications.",
        icon: "flask-conical"
    },
    {
        number: "296",
        title: "Advanced Robotics Synthesis",
        description: "A comprehensive project focusing on advanced robotics synthesis to discover new scientific methodologies and practical applications.",
        icon: "flame"
    },
    {
        number: "297",
        title: "Thermodynamic Acoustics Diagnostics",
        description: "A comprehensive project focusing on thermodynamic acoustics diagnostics to discover new scientific methodologies and practical applications.",
        icon: "activity"
    },
    {
        number: "298",
        title: "Theoretical Physics Diagnostics",
        description: "A comprehensive project focusing on theoretical physics diagnostics to discover new scientific methodologies and practical applications.",
        icon: "microscope"
    },
    {
        number: "299",
        title: "Kinetic Materials Science Testing",
        description: "A comprehensive project focusing on kinetic materials science testing to discover new scientific methodologies and practical applications.",
        icon: "target"
    },
    {
        number: "300",
        title: "Bio-inspired Genetics Diagnostics",
        description: "A comprehensive project focusing on bio-inspired genetics diagnostics to discover new scientific methodologies and practical applications.",
        icon: "rocket"
    },
    {
        number: "301",
        title: "Synthetic Astronomy Mapping",
        description: "A comprehensive project focusing on synthetic astronomy mapping to discover new scientific methodologies and practical applications.",
        icon: "microscope"
    },
    {
        number: "302",
        title: "Experimental Physics Prototyping",
        description: "A comprehensive project focusing on experimental physics prototyping to discover new scientific methodologies and practical applications.",
        icon: "activity"
    },
    {
        number: "303",
        title: "Computational Nanotechnology Prototyping",
        description: "A comprehensive project focusing on computational nanotechnology prototyping to discover new scientific methodologies and practical applications.",
        icon: "flame"
    },
    {
        number: "304",
        title: "Advanced Bio-Tech Testing",
        description: "A comprehensive project focusing on advanced bio-tech testing to discover new scientific methodologies and practical applications.",
        icon: "crosshair"
    },
    {
        number: "305",
        title: "Thermodynamic Geology Testing",
        description: "A comprehensive project focusing on thermodynamic geology testing to discover new scientific methodologies and practical applications.",
        icon: "flame"
    },
    {
        number: "306",
        title: "Smart Mirror",
        description: "A two-way mirror with an inbuilt display showing time, weather, and news updates using a Raspberry Pi.",
        icon: "monitor"
    },
    {
        number: "307",
        title: "Infinity Mirror",
        description: "An optical illusion mirror creating an infinite tunnel of LED lights using parallel reflective surfaces.",
        icon: "eye"
    },
    {
        number: "308",
        title: "Mini Tesla Coil",
        description: "A high-voltage resonant transformer circuit that wirelessly lights up fluorescent bulbs and generates plasma arcs.",
        icon: "zap"
    },
    {
        number: "309",
        title: "Line Follower Robot",
        description: "An autonomous robot that detects and follows a visual line on the floor using IR sensors.",
        icon: "bot"
    },
    {
        number: "310",
        title: "Obstacle Avoiding Robot",
        description: "A smart robotic car that navigates autonomously by detecting and dodging obstacles using ultrasonic sensors.",
        icon: "car"
    },
    {
        number: "311",
        title: "Gesture Controlled Car",
        description: "An RC vehicle controlled entirely by hand movements using an accelerometer and RF transmitter.",
        icon: "activity"
    },
    {
        number: "312",
        title: "Arduino Radar System",
        description: "A miniature radar using an ultrasonic sensor and servo motor mapped to a Processing screen.",
        icon: "crosshair"
    },
    {
        number: "313",
        title: "NodeMCU Home Automation",
        description: "Control home appliances remotely from a smartphone using WiFi and relay modules.",
        icon: "home"
    },
    {
        number: "314",
        title: "Smart Dustbin",
        description: "A trash can whose lid automatically opens when you approach it, powered by an ultrasonic sensor and servo.",
        icon: "trash-2"
    },
    {
        number: "315",
        title: "Clap Switch Circuit",
        description: "A sound-activated electrical switch that toggles appliances on or off with the sound of a clap.",
        icon: "mic"
    },
    {
        number: "316",
        title: "3D Hologram Pyramid",
        description: "A transparent pyramid structure placed on a screen to reflect 2D videos into a floating 3D hologram.",
        icon: "box"
    },
    {
        number: "317",
        title: "Bluetooth RC Car",
        description: "A robust remote-controlled car navigated via an Android app using a Bluetooth module (HC-05).",
        icon: "bluetooth"
    },
    {
        number: "318",
        title: "Auto Plant Watering System",
        description: "A system that checks soil moisture and automatically activates a water pump when the plant is dry.",
        icon: "droplets"
    },
    {
        number: "319",
        title: "RFID Attendance System",
        description: "A digital attendance logger that uses RFID tags and a reader to record entries and exits.",
        icon: "credit-card"
    },
    {
        number: "320",
        title: "Voice Controlled Robot",
        description: "A mobile robot that responds to spoken commands processed by an Android smartphone.",
        icon: "mic"
    },
    {
        number: "321",
        title: "Face Recognition Door Lock",
        description: "A security door that unlocks only after recognizing an authorized face using a camera module and AI.",
        icon: "lock"
    },
    {
        number: "322",
        title: "DIY Weather Station",
        description: "A standalone setup that measures ambient temperature, humidity, and atmospheric pressure.",
        icon: "cloud"
    },
    {
        number: "323",
        title: "CNC Pen Plotter",
        description: "A DIY 2-axis machine built from old CD drives that draws vector graphics and text automatically.",
        icon: "pen-tool"
    },
    {
        number: "324",
        title: "Smart Blind Stick",
        description: "A walking stick equipped with ultrasonic sensors and buzzers to alert visually impaired users of obstacles.",
        icon: "eye-off"
    },
    {
        number: "325",
        title: "Anti-Sleep Alarm",
        description: "An eye-blink sensor mounted on glasses that triggers a loud alarm to prevent drivers from falling asleep.",
        icon: "bell"
    },
    {
        number: "326",
        title: "Laser Security System",
        description: "A perimeter defense setup where crossing an invisible laser beam sets off a loud alarm.",
        icon: "shield"
    },
    {
        number: "327",
        title: "Rubiks Cube Solver",
        description: "A robotic mechanism equipped with color sensors to scan and physically solve a Rubik's Cube.",
        icon: "cpu"
    },
    {
        number: "328",
        title: "POV Display",
        description: "A high-speed spinning strip of LEDs that tricks the human eye into seeing floating text or images.",
        icon: "monitor-play"
    },
    {
        number: "329",
        title: "Electromagnetic Coil Gun",
        description: "A linear motor that uses electromagnetic coils to accelerate a magnetic projectile to high speeds.",
        icon: "target"
    },
    {
        number: "330",
        title: "Van de Graaff Generator",
        description: "An electrostatic machine that accumulates electric charge to demonstrate high voltage effects like hair raising.",
        icon: "zap"
    },
    {
        number: "331",
        title: "Wireless Power Transfer",
        description: "Demonstrating electromagnetic induction by transferring electrical energy between two coils without wires.",
        icon: "wifi"
    },
    {
        number: "332",
        title: "Heart Rate Monitor",
        description: "A pulse sensor that calculates Beats Per Minute (BPM) by detecting blood flow through a finger.",
        icon: "heart"
    },
    {
        number: "333",
        title: "Bionic Arm Prototype",
        description: "A 3D-printed mechanical arm controlled by reading muscle signals (EMG) from the user's real arm.",
        icon: "activity"
    },
    {
        number: "334",
        title: "Lie Detector Circuit",
        description: "A simple polygraph machine that measures skin resistance changes caused by sweating when someone lies.",
        icon: "activity"
    },
    {
        number: "335",
        title: "Water Level Indicator",
        description: "A multi-LED circuit that visually displays the water level inside an overhead tank to prevent overflow.",
        icon: "droplets"
    },
    {
        number: "336",
        title: "Solar Phone Charger",
        description: "A portable charging device that converts solar energy into a stable 5V output for USB devices.",
        icon: "sun"
    },
    {
        number: "337",
        title: "Peltier Mini Fridge",
        description: "A DIY cooler box that uses thermoelectric Peltier modules to drop temperatures without moving refrigerants.",
        icon: "thermometer"
    },
    {
        number: "338",
        title: "Magnetic Levitation System",
        description: "A feedback loop circuit that suspends a magnetic object in mid-air defying gravity.",
        icon: "magnet"
    },
    {
        number: "339",
        title: "Audio Spectrum Analyzer",
        description: "An LED matrix display that dances and visualizes sound frequencies in real-time.",
        icon: "music"
    },
    {
        number: "340",
        title: "DIY Hovercraft",
        description: "A friction-less vehicle model that floats on a cushion of air generated by high-power DC fans.",
        icon: "wind"
    },
    {
        number: "341",
        title: "Li-Fi Audio Transmission",
        description: "Transmitting an audio signal wirelessly using visible light from an LED to a solar cell receiver.",
        icon: "sun"
    }
];

// This function automatically adds the projects to the website
function renderProjects() {
    const container = document.getElementById('project-list');
    if (!container) return;

    container.innerHTML = projects.map(proj => `
        <div class="number-card fade-in glow-card">
            <div class="number-tag">${proj.number}</div>
            <div class="number-content">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                    <i data-lucide="${proj.icon}" color="var(--primary)" size="24"></i>
                    <h3 style="margin: 0;">${proj.title}</h3>
                </div>
                <p>${proj.description}</p>
            </div>
        </div>
    `).join('');

    // Add glow effect to dynamic cards
    container.querySelectorAll('.glow-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // Re-initialize Lucide and Observer for new elements
    if (typeof lucide !== 'undefined') lucide.createIcons();
    if (typeof observer !== 'undefined') {
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', renderProjects);
