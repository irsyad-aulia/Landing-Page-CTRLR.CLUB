"use client";

import React from 'react';
import { Instagram, Facebook, Twitter, Twitch } from 'lucide-react';
import { SiTiktok, SiDiscord, SiPinterest, SiKick } from 'react-icons/si';

const SocialIcons = () => {
    // PERUBAHAN: Semua icon SVG dikecilkan ukurannya menjadi w-4 h-4 (Kick menjadi w-5 h-5 agar proporsional)
    const socialLinks = [
        { name: 'Discord', id: 'discord', url: 'https://discord.com/channels/1420669550609043581/1430214185580630027', icon: <SiDiscord className="w-3 h-3" /> },
        { name: 'TikTok', id: 'tiktok', url: 'https://www.tiktok.com/@ctrlrclub', icon: <SiTiktok className="w-3 h-3" /> },
        { name: 'Instagram', id: 'instagram', url: 'https://www.instagram.com/ctrlr_club/', icon: <Instagram className="w-3 h-3" /> },
        { name: 'Facebook', id: 'facebook', url: 'https://www.facebook.com/profile.php?id=61580303012615', icon: <Facebook className="w-3 h-3" /> },
        { name: 'Pinterest', id: 'pinterest', url: 'https://www.pinterest.com/ctrlrclub/', icon: <SiPinterest className="w-3 h-3" /> },
        { name: 'X', id: 'x', url: 'https://x.com/CtrlrClub', icon: <Twitter className="w-3 h-3" /> },
        { name: 'Twitch', id: 'twitch', url: 'https://www.twitch.tv/ctrlrclub', icon: <Twitch className="w-3 h-3" /> },
        { name: 'Kick', id: 'kick', url: 'https://kick.com/ctrlrclub', icon: <SiKick className="w-3 h-3" /> },
    ];

    return (
        <div className="pointer-events-auto flex flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-3xl mx-auto px-2">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    // PERUBAHAN: Ukuran kotak (w/h) diturunkan dari 12/16 menjadi 10/12.
                    className="w-8 h-8 md:w-10 md:h-10 relative group z-10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:-translate-y-0 active:scale-90 cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-zinc-900 to-fuchsia-500/20 group-hover:from-cyan-400 group-active:from-cyan-400 group-hover:via-fuchsia-500/30 group-active:via-fuchsia-500/40 group-hover:to-fuchsia-400 group-active:to-fuchsia-400 transition-all duration-500 opacity-80 group-hover:opacity-100 group-active:opacity-100 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] group-active:shadow-[0_0_25px_rgba(217,70,239,0.6)] rounded-sm"></div>

                    <div className="absolute inset-[1px] bg-zinc-950 group-hover:bg-black group-active:bg-black transition-colors duration-500 rounded-sm"></div>

                    <div className="absolute top-[1px] left-[1px] w-1.5 h-[1.5px] bg-zinc-800 group-hover:bg-cyan-400 group-active:bg-cyan-400 transition-colors duration-500 z-20"></div>
                    <div className="absolute top-[1px] left-[1px] w-[1.5px] h-1.5 bg-zinc-800 group-hover:bg-cyan-400 group-active:bg-cyan-400 transition-colors duration-500 z-20"></div>
                    <div className="absolute bottom-[1px] right-[1px] w-1.5 h-[1.5px] bg-zinc-800 group-hover:bg-fuchsia-400 group-active:bg-fuchsia-400 transition-colors duration-500 z-20"></div>
                    <div className="absolute bottom-[1px] right-[1px] w-[1.5px] h-1.5 bg-zinc-800 group-hover:bg-fuchsia-400 group-active:bg-fuchsia-400 transition-colors duration-500 z-20"></div>

                    <span className="text-zinc-500 group-hover:text-white group-active:text-white transition-colors duration-300 relative z-30 drop-shadow-none group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                        {social.icon}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;