module.exports = {
    // PlatformIO environment for MKS Monster8 V2 (STM32F407VET6)
    board_env: "mks_monster8",
    
    active: true,
    
    min_version: "2.1.2",
    
    meta: {
        stable_name: "mks-monster8-v2-{{marlin_version}}-{{uid}}",
        nightly_name: "mks-monster8-v2-{{current_date}}-{{uid}}"
    },
    
    // Base configuration from Marlin's example configs or MKS repo
    based_on: {
        repo: "https://github.com/makerbase-mks/MKS-Monster8/",
        path: "/marlin firmware for voron/MKS_MONSTER_Marlin-2.0.x/Marlin-2.0.x/Marlin/",
        stable_branch: "main",
        nightly_branch: "main"
    },
    
    configuration: {
        enable: [
            // Board selection
            ["MOTHERBOARD", "BOARD_MKS_MONSTER8_V2"],
            
            // Serial port for USB communication
            ["SERIAL_PORT", -1],
            
            // Enable EEPROM (4K on board)
            "EEPROM_SETTINGS",
            
            // SD Card support
            "SDSUPPORT",
            
            // LCD Support - Enable if you have MKS MINI12864 V3
            // "MKS_MINI_12864_V3",
            
            // Enable BLTouch if you have one
            // "BLTOUCH",
            
            // Enable filament runout sensor
            // "FILAMENT_RUNOUT_SENSOR",
            
            // Bed leveling (choose one)
            // "AUTO_BED_LEVELING_BILINEAR",
            // "MESH_BED_LEVELING",
            
            // CoreXY if you're building a Voron
            // "COREXY",
        ],
        disable: []
    },
    
    configuration_adv: {
        enable: [
            // OctoPrint/Klipper host action support
            "HOST_ACTION_COMMANDS",
            
            // Input shaping for vibration compensation (Marlin 2.1+)
            // "INPUT_SHAPING_X",
            // "INPUT_SHAPING_Y",
            
            // TMC2209 UART mode settings
            // "TMC_DEBUG",
        ],
        disable: []
    }
};
