using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Components;

namespace Ameh.UI.Home.Shared
{
    public partial class FontAwesomeIcon : ComponentBase
    {
        [Parameter]
        public string IconName { get; set; }

        [Parameter]
        public string IconSize { get; set; }

        public string IconNameCssClass => $"fa-{IconName}";

        public string IconSizeCssClass =>
            IconSize switch
            {
                "xs" => "fa-xs",
                "sm" => "fa-sm",
                "lg" => "fa-lg",
                "1" => "fa-1x",
                "2" => "fa-2x",
                "3" => "fa-3x",
                "4" => "fa-4x",
                "5" => "fa-5x",
                "6" => "fa-6x",
                "7" => "fa-7x",
                "8" => "fa-8x",
                "9" => "fa-9x",
                "10" => "fa-10x",
                _ => throw new ArgumentException($"Invalid IconSize provided: {IconSize}.")
            };
    }
}
