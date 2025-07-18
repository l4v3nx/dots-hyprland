function updmir --wraps=set\ -lx\ TMPFILE\ \(mktemp\)\;\ \\\n\ \ \ \ sudo\ true\;\ \\\n\ \ \ \ echo\ \"::\ Updating\ mirrors...\"\n\ \ \ \ rate-mirrors\ --save=\$TMPFILE\ --protocol=https\ arch\ \\\n\ \ \ \ \ \ \&\&\ sudo\ mv\ /etc/pacman.d/mirrorlist\ /etc/pacman.d/mirrorlist-backup\ \\\n\ \ \ \ \ \ \&\&\ sudo\ mv\ \$TMPFILE\ /etc/pacman.d/mirrorlist\;\n\ \ \ \ rate-mirrors\ --save=\$TMPFILE\ --protocol=https\ chaotic-aur\ \\\n\ \ \ \ \ \ \&\&\ sudo\ mv\ /etc/pacman.d/chaotic-mirrorlist\ /etc/pacman.d/chaotic-mirrorlist-backup\ \\\n\ \ \ \ \ \ \&\&\ sudo\ mv\ \$TMPFILE\ /etc/pacman.d/chaotic-mirrorlist --description "Update arch mirrors"
    set -lx TMPFILE (mktemp)
        sudo true
        echo ":: Updating mirrors..."
    rate-mirrors --save=$TMPFILE --protocol=https arch \
        && sudo mv /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist-backup \
        && sudo mv $TMPFILE /etc/pacman.d/mirrorlist
    rate-mirrors --save=$TMPFILE --protocol=https chaotic-aur \
        && sudo mv /etc/pacman.d/chaotic-mirrorlist /etc/pacman.d/chaotic-mirrorlist-backup \
        && sudo mv $TMPFILE /etc/pacman.d/chaotic-mirrorlist $argv

end
