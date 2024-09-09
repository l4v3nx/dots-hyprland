function pkgbuild
    if command --quiet -v paru 
        paru -Gp $argv | less -N
    else if command --quiet -v yay
        yay -Gp $argv | less -N
    end
end
