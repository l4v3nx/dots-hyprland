const { Pango } = imports.gi;
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import PowerProfiles from "resource:///com/github/Aylur/ags/service/powerprofiles.js";
const { Box, Button, Label, Scrollable, Stack } = Widget;
import { MaterialIcon } from '../../.commonwidgets/materialicon.js';

const PROFILES_META = {
    'power-saver': {
        'label': getString("Power Saver"),
        'icon': "access_time",
        'describe': getString("Reduced performance and power usage"),
    },
    'balanced': {
        'label': getString("Balanced"),
        'icon': "balance",
        'describe': getString("Standard performance and power usage"),
    },
    'performance': {
        'label': getString("Performance"),
        'icon': "bolt",
        'describe': getString("High performance and power usage"),
    },
};

/**
 * The item in the profile list
 * (Profile, CpuDriver, PlatformDriver, Driver)
 * @param {{[key: string]: string}} profile 
 */
const PowerProfile = (profile) => {
    const is_selected = () => PowerProfiles.active_profile == profile['Profile'];
    const meta = PROFILES_META[profile['Profile']];

    const profileName = Box({
        vertical: true,
        children: [
            Label({
                hpack: 'start',
                label: meta.label
            }),
            Label({
                hpack: 'start',
                className: 'txt-smaller txt-subtext',
                label: meta.describe
            })
        ],
    });

    return Button({
        onClicked: is_selected() ? () => { } : () => { PowerProfiles.active_profile = profile['Profile']; },
        child: Box({
            className: 'sidebar-wifinetworks-network spacing-h-10',
            children: [
                MaterialIcon(meta.icon, 'hugerass'),
                profileName,
                Box({ hexpand: true }),
                is_selected() ? MaterialIcon('check', 'large') : null
            ],
        }),
    });
}

export default (props) => {
    const profileList = Box({
        vertical: true,
        className: 'spacing-v-10',
        children: [
            Scrollable({
                vexpand: true,
                child: Box({
                    vertical: true,
                    attribute: {
                        'updateProfiles': (self) => {
                            self.children = PowerProfiles.profiles.map(n => PowerProfile(n)).reverse();
                        },
                    },
                    className: 'spacing-v-5 margin-bottom-15',
                    setup: (self) => self.hook(PowerProfiles, self.attribute.updateProfiles),
                }),
            }),
        ],
    });

    const profileEmpty = Box({
        homogeneous: true,
        children: [
            Box({
                vertical: true,
                vpack: 'center',
                className: 'txt spacing-v-10',
                children: [
                    Box({
                        vertical: true,
                        className: 'spacing-v-5 txt-subtext',
                        children: [
                            MaterialIcon('error', 'gigantic'),
                            Label({ label: getString('Power profiles daemon is not detected.\n  Install either power-profiles-daemon\n\t\t\tor tuned-ppd'), className: 'txt-small', wrapMode: Pango.WrapMode.WORD_CHAR, }),
                        ],
                    }),
                ]
            })]
    });

    const listContents = Stack({
        transition: 'crossfade',
        transitionDuration: userOptions.animations.durationLarge,
        children: {
            'empty': profileEmpty,
            'list': profileList,
        },
        setup: (self) => self.hook(PowerProfiles, (self) => {
            self.shown = (PowerProfiles.active_profile == undefined || PowerProfiles.active_profile == '' ? 'empty' : 'list')
        }),
    });

    return Box({
        ...props,
        className: 'spacing-v-10',
        vertical: true,
        children: [
            listContents,
        ],
    });
}
