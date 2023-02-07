import React from 'react';
import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';

export const enchanceQualityImprovement = ({ name }) => {

    return (

        <Document>
            <Page orientation='landscape' size='A4'>
                <title>Implementation Charter – Enhance quality improvement supports related to  "{name}" in “service”</title>
                <View>
                    <Text>Initiative</Text>
                    <Text>Enhance quality improvement supports using “mechanism 1”, “mechanism 2”, and “mechanism n” mechanisms </Text>
                </View>
                <View>
                    <Text>Activities</Text>
                    <Text>1. Identify government agency to lead efforts in identifying quality improvement support system to improve the quality of “standard 1”
                        •    Identify lead agency and form working group consisting of service providers and relevant government agencies to discuss efforts required to support
                        service providers to improve the quality related to standard: “standard 1”
                        2. Develop draft for a quality improvement support system to improve “standard 1” using “mechanism 1”, “mechanism 2”, and “mechanism n”
                        mechanisms
                        •    Carry out an assessment of all existing quality improvement support systems that currently exist related to standard: “standard 1”
                        •    Evaluate global practices for quality improvement support policies aimed at improving standard: “standard 1” within related services
                        •    Agree on the identified quality improvement support policies and practices related to standard: “standard 1”
                        •  Work alongside relevant agencies to identify and mobilize resources needed for a quality improvement support system using “mechanism1”,
                        “mechanism 2”, and “mechanism n” related to standard: “standard 1”
                        3. Develop governance structure to identify roles and responsibilities of stakeholders impacted by “standard 1”
                        •  Identify agencies and their staff to provide quality improvement support related to “standard 1”
                        •  Identify rules, procedures, roles and responsibilities across the full decision-making process related to standard: “standard 1”
                        4. Educate and mobilize resources that might be impacted by suggested changes to quality improvement requirements
                        •  Inform and educate service providers and agencies impacted by suggested updates of quality improvement requirements related to  improving
                        standard: “standard 1”
                        •  Equip service providers and agencies with resources required to successfully access quality improvement support related to “standard 1”
                        5. Roll-out quality improvement support system related to improving “standard 1”
                        •  Gain approval from appropriate agencies and introduce suggested quality improvement support system </Text>
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
