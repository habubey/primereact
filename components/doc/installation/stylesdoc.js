import Link from 'next/link';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StylesDoc(props) {
    const code = {
        basic: `
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";                                         
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Theme, core and icons are the necessary css files of the components, visit the <Link href="/theming#themes">Themes</Link> section for the complete list of available themes to choose from. In upcoming version 10, a css-in-js
                    approach will be implemented along with migration to SVG icons to remove the requirement to install css files.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
