import React from 'react';
import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';

export const definingQualityStandards = ({ name }) => {

    return (

        <Document>
            <Page orientation='landscape' size='A4'>
                <title>Implementation Charter - Define quality standards, regulations related to {name}</title>
                <View>
                    <Text>Initiative</Text>
                    <Text>Implementation Charter - Define quality standards, regulations related to {name}</Text>
                </View>
                <View>
                    <Text>Activities</Text>
                    <Text>1. Identify government agency to lead efforts related to enhancing standards and regulations related to "{name}"
                        •     Identify lead agency and form working group consisting of service providers and relevant government agencies to discuss efforts required to
                        improve standards and regulations related to standard: "{name}"
                        2. Develop draft for standards and regulations related to improving "{name}" using "mechanism 1", "mechanism 2", and "mechanism n"
                        mechanisms
                        •     Carry out an assessment of all existing standards and regulations that currently exist related to standard: "{name}"
                        •     Evaluate global practices for standards and regulations aimed at improving standard: "{name}" within related services
                        •     Agree on standards and regulations required to improve practices related to standard: "{name}"
                        •    Work alongside subject matter experts to develop draft for "mechanism 1", "mechanism 2", and "mechanism n" mechanisms for standards
                        and regulations related to standard: "{name}"
                        3. Develop governance structure to identify roles and responsibilities of stakeholders impacted by "{name}"
                        •   Identify agencies and their staff related to improving "{name}" in related services
                        •   Identify rules, procedures, roles and responsibilities across the full decision-making process related to standard: "{name}"
                        4. Educate and mobilize resources that might be impacted by suggested changes to standards and regulations
                        •   Inform and educate service providers and agencies impacted by suggested updates of standards and regulations related to improving
                        standard: "{name}"
                        •   Equip service providers and agencies with resources required to successfully adopt suggested standards and regulations
                        5. Roll-out standards and regulations related to improving "{name}"
                        •   Gain approval from appropriate agencies and introduce suggested standards and regulations</Text>
                </View>
                <View>
                    <Text>Initiative Owner</Text>
                    <Text>Identify Initiative
                        owner</Text>
                    <Text>Timeline</Text>
                    <Text>Estimated Timeline</Text>
                    <Text>Budget</Text>
                    <Text>Estimated Budget</Text>
                </View>
            </Page>
        </Document>

    )
}
