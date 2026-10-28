"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaPinterestP,
  FaLeaf,
} from "react-icons/fa6";
import { GiCroissant, GiCoffeeCup } from "react-icons/gi";
import { MdStorefront } from "react-icons/md";

export function LeafDecor({
  className = "w-7 h-7 text-[#C8924B]",
}: {
  className?: string;
}) {
  return <FaLeaf className={className} />;
}

export function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "leaves":
      return <FaLeaf className="w-7 h-7 text-[#C8924B]" />;
    case "coffee":
      return <GiCoffeeCup className="w-8 h-8 text-[#C8924B]" />;
    case "food":
      return <GiCroissant className="w-8 h-8 text-[#C8924B]" />;
    case "ambience":
      return <MdStorefront className="w-8 h-8 text-[#C8924B]" />;
    default:
      return <GiCoffeeCup className="w-8 h-8 text-[#C8924B]" />;
  }
}

export function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "facebook":
      return <FaFacebookF className="w-4 h-4" />;
    case "instagram":
      return <FaInstagram className="w-4 h-4" />;
    case "twitter":
      return <FaXTwitter className="w-4 h-4" />;
    case "pinterest":
      return <FaPinterestP className="w-4 h-4" />;
    default:
      return null;
  }
}
