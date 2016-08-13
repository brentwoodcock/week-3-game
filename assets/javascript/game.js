var game = {
	wordBank: [{
		name: 'abaddon',
		image: 'assets/images/Abaddon.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/bd/Abad_begin_02.mp3',
		phrase: 'Abaddon, the Lord of Avernus'
	},{
		name:'alchemist',
		image: 'assets/images/Alchemist.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/a5/Alch_spawn_04.mp3',
		phrase: 'Razzil Darkbrew, the Alchemist'
	},{
		name:'ancient apparition',
		image: 'assets/images/Ancient_Apparition.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2a/Appa_spawn_03.mp3',
		phrase: 'Kaldr, the Ancient Apparition'
	},{
		name:'anti-mage',
		image: 'assets/images/Anti-Mage.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/ec/Anti_spawn_03.mp3',
		phrase: 'Anti-Mage'
	},{
		name:'arc warden',
		image: 'assets/images/Arc_Warden.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/6c/Arcwar_spawn_03.mp3',
		phrase: 'Zet, the Arc Warden'
	},{
		name:'axe',
		image: 'assets/images/Axe.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/eb/Axe_respawn_06.mp3',
		phrase: 'Mogul Khan, the Axe'
	},{
		name:'bane',
		image: 'assets/images/Bane.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/54/Bane_spawn_05.mp3',
		phrase: 'Atropos, the Bane'
	},{
		name:'batrider',
		image: 'assets/images/Batrider.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/f0/Bat_kill_15.mp3',
		phrase: 'Batrider'
	},{
		name:'beastmaster',
		image: 'assets/images/Beastmaster.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b1/Beas_rare_02.mp3',
		phrase: 'Karroch, the Beastmaster'
	},{
		name:'bloodseeker',
		image: 'assets/images/Bloodseeker.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/6c/Blod_spawn_05.mp3',
		phrase: 'Strygwyr, the Bloodseeker'
	},{
		name:'bounty hunter',
		image: 'assets/images/Bounty_Hunter.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/fa/Bount_respawn_04.mp3',
		phrase: 'Gondar, the Bounty Hunter'
	},{
		name:'brewmaster',
		image: 'assets/images/Brewmaster.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/f4/Brew_level_05.mp3',
		phrase: 'Mangix, the Brewmaster'
	},{
		name:'bristleback',
		image: 'assets/images/Bristleback.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/48/Bristle_spawn_05.mp3',
		phrase: 'Rigwarl, the Bristleback'
	},{
		name:'broodmother',
		image: 'assets/images/Broodmother.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/62/Broo_spawn_05.mp3',
		phrase: 'Black Arachnia, the Broodmother'
	},{
		name:'centaur warrunner',
		image: 'assets/images/Centaur_Warrunner.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/24/Cent_ally_18.mp3',
		phrase: 'Bradwarden, the Centaur Warrunner'
	},{
		name:'chaos knight',
		image: 'assets/images/Chaos_Knight.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/47/Chaknight_rare_03.mp3',
		phrase: 'Chaos Knight'
	},{
		name:'chen',
		image: 'assets/images/Chen.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/03/Chen_rare_01.mp3',
		phrase: 'Chen, the Holy Knight'
	},{
		name:'clinkz',
		image: 'assets/images/Clinkz.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/c8/Clinkz_spawn_03.mp3',
		phrase: 'Clinkz, the Bone Fletcher'
	},{
		name:'clockwerk',
		image: 'assets/images/Clockwerk.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/68/Ratt_spawn_03.mp3',
		phrase: 'Rattletrap, the Clockwerk'
	},{
		name:'crystal maiden',
		image: 'assets/images/Crystal_Maiden.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/45/Cm_battlebegins_01.mp3',
		phrase: 'Rylai, the Crystal Maiden'
	},{
		name:'dark seer',
		image: 'assets/images/Dark_Seer.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/83/Dkseer_rare_02.mp3',
		phrase: "Ish'Kafel, the Dark Seer"
	},{
		name:'dazzle',
		image: 'assets/images/Dazzle.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b7/Dazz_spawn_04.mp3',
		phrase: 'Dazzle, the Shadow Priest'
	},{
		name:'death prophet',
		image: 'assets/images/Death_Prophet.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/3b/Dpro_spawn_02.mp3',
		phrase: 'Krobelus, the Death Prophet'
	},{
		name:'disruptor',
		image: 'assets/images/Disruptor.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/13/Dis_rare_03.mp3',
		phrase: 'Disruptor, the Stormcrafter'
	},{
		name:'doom',
		image: 'assets/images/Doom.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2e/Doom_rare_01.mp3',
		phrase: 'Lucifer, the Doom'
	},{
		name:'dragon knight',
		image: 'assets/images/Dragon_Knight.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/12/DK_drag_rare_02.mp3',
		phrase: 'Davion, the Dragon Knight'
	},{
		name:'drow ranger',
		image: 'assets/images/Drow_Ranger.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/25/Dro_rare_02.mp3',
		phrase: 'Traxex, the Drow Ranger'
	},{
		name:'earth spirit',
		image: 'assets/images/Earth_Spirit.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/4f/Earthspi_spawn_03.mp3',
		phrase: 'Kaolin, the Earth Spirit'
	},{
		name:'earthshaker',
		image: 'assets/images/Earthshaker.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/a5/Erth_rare_05.mp3',
		phrase: 'Raigor Stonehoof, the Earthshaker'
	},{
		name:'elder titan',
		image: 'assets/images/Elder_Titan.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/55/Elder_spawn_02.mp3',
		phrase: 'Elder Titan, the Worldsmith'
	},{
		name:'ember spirit',
		image: 'assets/images/Ember_Spirit.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/88/Embr_move_02.mp3',
		phrase: 'Xin, the Ember Spirit'
	},{
		name:'enchantress',
		image: 'assets/images/Enchantress.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2d/Ench_move_22.mp3',
		phrase: 'Aiushtha, the Enchantress'
	},{
		name:'enigma',
		image: 'assets/images/Enigma.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/70/Enig_spawn_08.mp3',
		phrase: 'Enigma'
	},{
		name:'faceless void',
		image: 'assets/images/Faceless_Void.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/31/Face_spawn_04.mp3',
		phrase: 'Darkterror, the Faceless Void'
	},{
		name:'gyrocopter',
		image: 'assets/images/Gyrocopter.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8a/Gyro_deny_05.mp3',
		phrase: 'Aurel, the Gyrocopter'
	},{
		name:'huskar',
		image: 'assets/images/Huskar.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/36/Husk_rare_01.mp3',
		phrase: 'Huskar, the Sacred Warrior'
	},{
		name:'invoker',
		image: 'assets/images/Invoker.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/db/Invo_level_05.mp3',
		phrase: 'Invoker'
	},{
		name:'io',
		image: 'assets/images/Io.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/64/Wisp_Ally.mp3',
		phrase: 'Io, the Wisp'
	},{
		name:'jakiro',
		image: 'assets/images/Jakiro.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/df/Jak_spawn_05.mp3',
		phrase: 'Jakiro, the Twin Head Dragon'
	},{
		name:'juggernaut',
		image: 'assets/images/Juggernaut.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/50/Jug_rare_01.mp3',
		phrase: 'Yurnero, the Juggernaut'
	},{
		name:'keeper of the light',
		image: 'assets/images/Keeper_of_the_Light.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/91/Keep_rare_04.mp3',
		phrase: 'Ezalor, the Keeper of the Light'
	},{
		name:'kunkka',
		image: 'assets/images/Kunkka.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/81/Kunk_spawn_05.mp3',
		phrase: 'Kunkka, the Admiral'
	},{
		name:'legion commander',
		image: 'assets/images/Legion_Commander.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/27/Legcom_begin_01.mp3',
		phrase: 'Tresdin, the Legion Commander'
	},{
		name:'leshrac',
		image: 'assets/images/Leshrac.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/fd/Lesh_rare_02.mp3',
		phrase: 'Leshrac, the Tormented Soul'
	},{
		name:'lich',
		image: 'assets/images/Lich.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7e/Lich_spawn_03.mp3',
		phrase: 'Ethreain, the Lich'
	},{
		name:'lifestealer',
		image: 'assets/images/Lifestealer.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/53/Lifest_move_10.mp3',
		phrase: "N'aix, the Lifestealer"
	},{
		name:'lina',
		image: 'assets/images/Lina.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/d5/Lina_rare_02.mp3',
		phrase: 'Lina, the Slayer'
	},{
		name:'lion',
		image: 'assets/images/Lion.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/c7/Lion_spawn_06.mp3',
		phrase: 'Lion, the Demon Witch'
	},{
		name:'lone druid',
		image: 'assets/images/Lone_Druid.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/34/Lone_druid_spawn_06.mp3',
		phrase: 'Sylla, the Lone Druid'
	},{
		name:'luna',
		image: 'assets/images/Luna.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/97/Luna_spawn_02.mp3',
		phrase: 'Luna, the Moon Rider'
	},{
		name:'lycan',
		image: 'assets/images/Lycan.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/a1/Lycan_rare_01.mp3',
		phrase: 'Banehallow, the Lycan'
	},{
		name:'magnus',
		image: 'assets/images/Magnus.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/f0/Magn_spawn_06.mp3',
		phrase: 'Magnus, the Magnoceros'
	},{
		name:'medusa',
		image: 'assets/images/Medusa.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/e8/Medus_begin_03.mp3',
		phrase: 'Medusa, the Gorgon'
	},{
		name:'meepo',
		image: 'assets/images/Meepo.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8d/Meepo_spawn_04.mp3',
		phrase: 'Meepo, the Geomancer'
	},{
		name:'mirana',
		image: 'assets/images/Mirana.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/5b/Mir_rare_08.mp3',
		phrase: 'Mirana, the Princess of the Moon'
	},{
		name:'morphling',
		image: 'assets/images/Morphling.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7b/Mrph_rare_02.mp3',
		phrase: 'Morphling'
	},{
		name:'naga siren',
		image: 'assets/images/Naga_Siren.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/1b/Naga_spawn_05.mp3',
		phrase: 'Slithice, the Naga Siren'
	},{
		name:"nature's prophet",
		image: "assets/images/Nature's_Prophet.png",
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/f5/Furi_spawn_01.mp3',
		phrase: "Nature's Prophet"
	},{
		name:'necrophos',
		image: 'assets/images/Necrophos.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/39/Necr_rare_04.mp3',
		phrase: "Rotund'jere, the Necrophos"
	},{
		name:'night stalker',
		image: 'assets/images/Night_Stalker.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/6c/Nstalk_spawn_03.mp3',
		phrase: 'Balanar, the Night Stalker'
	},{
		name:'nyx assassin',
		image: 'assets/images/Nyx_Assassin.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/02/Nyx_rare_04.mp3',
		phrase: 'Nyx Assassin'
	},{
		name:'ogre magi',
		image: 'assets/images/Ogre_Magi.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2a/Ogmag_ability_multi_09.mp3',
		phrase: 'Aggron Stonebreak, the Ogre Magi'
	},{
		name:'omniknight',
		image: 'assets/images/Omniknight.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/9a/Omni_spawn_04.mp3',
		phrase: 'Purist Thunderwrath, the Omniknight'
	},{
		name:'oracle',
		image: 'assets/images/Oracle.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7e/Orac_spawn_02.mp3',
		phrase: 'Nerif, the Oracle'
	},{
		name:'outworld devourer',
		image: 'assets/images/Outworld_Devourer.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/6c/Odest_begin_01.mp3',
		phrase: 'Harbinger, the Outworld Devourer'
	},{
		name:'phantom assassin',
		image: 'assets/images/Phantom_Assassin.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/36/Phass_spawn_05.mp3',
		phrase: 'Mortred, the Phantom Assassin'
	},{
		name:'phantom lancer',
		image: 'assets/images/Phantom_Lancer.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/55/Plance_kill_10.mp3',
		phrase: 'Azwraith, the Phantom Lancer'
	},{
		name:'phoenix',
		image: 'assets/images/Phoenix.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8c/Phoenix_bird_emote_good.mp3',
		phrase: 'Phoenix'
	},{
		name:'puck',
		image: 'assets/images/Puck.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/90/Puck_spawn_02.mp3',
		phrase: 'Puck, the Faerie Dragon'
	},{
		name:'pudge',
		image: 'assets/images/Pudge.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/46/Pud_spawn_03.mp3',
		phrase: 'Pudge, the Butcher'
	},{
		name:'pugna',
		image: 'assets/images/Pugna.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/da/Pugna_spawn_05.mp3',
		phrase: 'Pugna'
	},{
		name:'queen of pain',
		image: 'assets/images/Queen_of_Pain.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b6/Pain_rare_03.mp3',
		phrase: 'Akasha, the Queen of Pain'
	},{
		name:'razor',
		image: 'assets/images/Razor.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7f/Raz_spawn_03.mp3',
		phrase: 'Razor, the Lightning Revenant'
	},{
		name:'riki',
		image: 'assets/images/Riki.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/ce/Riki_spawn_08.mp3',
		phrase: 'Riki, the Stealth Assassin'
	},{
		name:'rubick',
		image: 'assets/images/Rubick.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/81/Rubick_move_21.mp3',
		phrase: 'Rubick, the Grand Magus'
	},{
		name:'sand king',
		image: 'assets/images/Sand_King.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/f5/Skg_spawn_07.mp3',
		phrase: 'Crixalis, the Sand King'
	},{
		name:'shadow demon',
		image: 'assets/images/Shadow_Demon.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b4/Shadow_demon_respawn_08.mp3',
		phrase: 'Shadow Demon'
	},{
		name:'shadow fiend',
		image: 'assets/images/Shadow_Fiend.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/6a/Nev_arc_spawn_03.mp3',
		phrase: 'Nevermore, the Shadow Fiend'
	},{
		name:'shadow shaman',
		image: 'assets/images/Shadow_Shaman.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/9e/Shad_spawn_05.mp3',
		phrase: 'Rhasta, the Shadow Shaman'
	},{
		name:'silencer',
		image: 'assets/images/Silencer.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/dc/Silen_spawn_03.mp3',
		phrase: 'Nortrom, the Silencer'
	},{
		name:'skywrath mage',
		image: 'assets/images/Skywrath_Mage.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/84/Drag_kill_02.mp3',
		phrase: 'Dragonus, the Skywrath Mage'
	},{
		name:'slardar',
		image: 'assets/images/Slardar.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7f/Slar_rare_01.mp3',
		phrase: 'Slardar, the Slithereen Guard'
	},{
		name:'slark',
		image: 'assets/images/Slark.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/ab/Slark_spawn_05.mp3',
		phrase: 'Slark, the Nightcrawler'
	},{
		name:'sniper',
		image: 'assets/images/Sniper.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b1/Snip_spawn_06.mp3',
		phrase: 'Kardel Sharpeye, the Sniper'
	},{
		name:'spectre',
		image: 'assets/images/Spectre.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/fd/Spec_spawn_02.mp3',
		phrase: 'Mercurial, the Spectre'
	},{
		name:'spirit breaker',
		image: 'assets/images/Spirit_Breaker.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/bb/Spir_spawn_03.mp3',
		phrase: 'Barathrum, the Spirit Breaker'
	},{
		name:'storm spirit',
		image: 'assets/images/Storm_Spirit.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/c4/Ss_rare_03.mp3',
		phrase: 'Raijin Thunderkeg, the Storm Spirit'
	},{
		name:'sven',
		image: 'assets/images/Sven.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/42/Sven_rare_07.mp3',
		phrase: 'Sven, the Rogue Knight'
	},{
		name:'techies',
		image: 'assets/images/Techies.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/dc/Tech_begin_01.mp3',
		phrase: 'Squee, Spleen, and Spoon, the Techies'
	},{
		name:'templar assassin',
		image: 'assets/images/Templar_Assassin.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/a7/Temp_rare_01.mp3',
		phrase: 'Lanaya, the Templar Assassin'
	},{
		name:'terrorblade',
		image: 'assets/images/Terrorblade.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/45/Terr_rare_01.mp3',
		phrase: 'Terrorblade, the Demon Marauder'
	},{
		name:'tidehunter',
		image: 'assets/images/Tidehunter.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/1e/Tide_rare_01.mp3',
		phrase: 'Leviathan, the Tidehunter'
	},{
		name:'timbersaw',
		image: 'assets/images/Timbersaw.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/cb/Timb_spawn_03.mp3',
		phrase: 'Rizzrack, the Timbersaw'
	},{
		name:'tinker',
		image: 'assets/images/Tinker.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/63/Tink_rare_05.mp3',
		phrase: 'Boush, the Tinker'
	},{
		name:'tiny',
		image: 'assets/images/Tiny.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/21/Tiny_rare_03.mp3',
		phrase: 'Tiny'
	},{
		name:'treant protector',
		image: 'assets/images/Treant_Protector.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/20/Treant_rare_03.mp3',
		phrase: 'Rooftrellen, the Treant Protector'
	},{
		name:'troll warlord',
		image: 'assets/images/Troll_Warlord.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/3b/Troll_rare_02.mp3',
		phrase: "Jah'rakal, the Troll Warlord"
	},{
		name:'tusk',
		image: 'assets/images/Tusk.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b7/Tusk_spawn_07.mp3',
		phrase: 'Ymir, the Tusk'
	},{
		name:'undying',
		image: 'assets/images/Undying.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/3b/Undying_rare_02.mp3',
		phrase: 'Undying, the Almighty Dirge'
	},{
		name:'ursa',
		image: 'assets/images/Ursa.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/bf/Ursa_spawn_04.mp3',
		phrase: 'Ulfsaar, the Ursa Warrior'
	},{
		name:'vengeful spirit',
		image: 'assets/images/Vengeful_Spirit.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/91/Vng_rare_05.mp3',
		phrase: 'Shendelzare, the Vengeful Spirit'
	},{
		name:'venomancer',
		image: 'assets/images/Venomancer.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/48/Venm_spawn_04.mp3',
		phrase: 'Lesale Deathbringer, the Venomancer'
	},{
		name:'viper',
		image: 'assets/images/Viper.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/80/Vipe_attack_10.mp3',
		phrase: 'Viper, the Netherdrake'
	},{
		name:'visage',
		image: 'assets/images/Visage.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/04/Visa_spawn_05.mp3',
		phrase: "Visage, the Bound Form of Necro'lic"
	},{
		name:'warlock',
		image: 'assets/images/Warlock.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/cb/Warl_ability_reign_03.mp3',
		phrase: 'Demnok Lannik, the Warlock'
	},{
		name:'weaver',
		image: 'assets/images/Weaver.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/e5/Weav_spawn_03.mp3',
		phrase: 'Skitskurr, the Weaver'
	},{
		name:'windranger',
		image: 'assets/images/Windranger.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/02/Wind_spawn_07.mp3',
		phrase: 'Lyralei, the Windranger'
	},{
		name:'winter wyvern',
		image: 'assets/images/Winter_Wyvern.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/4b/Winwyv_spawn_05.mp3',
		phrase: 'Auroth, the Winter Wyvern'
	},{
		name:'witch doctor',
		image: 'assets/images/Witch_Doctor.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/09/Wdoc_attack_07.mp3',
		phrase: 'Zharvakko, the Witch Doctor'
	},{
		name:'wraith king',
		image: 'assets/images/Wraith_King.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/f4/Wraith_rare_02.mp3',
		phrase: 'Ostarion, the Wraith King'
	},{
		name:'zeus',
		image: 'assets/images/Zeus.png',
		audio: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/07/Zuus_rare_04.mp3',
		phrase: 'Zeus, the Lord of Heaven'
	}
	],
	randomIdx: -1,
	phrase: '',
	imgSource: '',
	audioSource: '',
	answer: '',
	prevAnswer: '',
	characters: [],
	displayedWord: [],
	guesses: [],
	numGuesses: 12,
	isWin: false,
	isOver: false,
	wins: 0,

	pickWord: function(){
		randomIdx = Math.floor(Math.random() * this.wordBank.length);
		this.answer = this.wordBank[randomIdx].name;
		this.characters = this.answer.split('');
		for (i in this.characters){
			if ((this.characters[i] == ' ') || (this.characters[i] == '-') || (this.characters[i] == "'")){
				this.displayedWord[i] = this.characters[i];
			}else{
				this.displayedWord[i] = '_';
			}
		}
	},

	checkGuess: function(userGuess){
		if (this.characters.indexOf(userGuess) == -1){
			this.numGuesses--;
			this.guesses.push(userGuess);
		}else{
			for (i in this.characters){
				if (this.characters[i] == userGuess){
					this.displayedWord[i] = userGuess;
				}
			}
		}
	},

	checkWin: function(){
		if (this.displayedWord.indexOf('_') == -1){
			this.isWin = true;
			this.wins++;
			this.changeImage();
			this.changeAudio();
			this.changePhrase();
		}else if(this.numGuesses == 0){
			this.isWin = false;
			this.isOver = true;
			this.prevAnswer = this.answer;
		}
	},

	changeImage: function(){
		this.imgSource = this.wordBank[randomIdx].image;
	},

	changeAudio: function(){
		this.audioSource = this.wordBank[randomIdx].audio;
	},

	changePhrase: function(){
		this.phrase = this.wordBank[randomIdx].phrase;
	},

	reset: function(){
		this.characters = [];
		this.displayedWord = [];
		this.guesses = [];
		this.numGuesses = 12;
		this.isWin = false;
		this.isOver = false;
		this.pickWord();
	}
}