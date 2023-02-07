import React from 'react';
import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';

export const builDataAndMeasurement = ({ name }) => {

    return (

        <Document>
            <Page orientation='landscape' size='A4'>
                <title>Implementation Charter – Administer a financing system for {name}</title>
                <View>
                    <Text>Initiative</Text>
                    <Text>Administer a financing system using “mechanism 1”, “mechanism 2”, and “mechanism n” mechanisms. </Text>
                </View>
                <View>
                    <Text>Activities</Text>
                    <Text>1. Identify government agency to lead efforts in establishing financing mechanisms to allow providers to attain and maintain high quality of “standard
                        1”
                        •    Identify lead agency and form working group consisting of service providers and relevant government agencies to discuss efforts required to identify
                        financial incentives aimed at attaining and maintaining quality related to standard: “standard 1”
                        2. Develop draft for funding criteria required to incentivize service providers to implement “standard 1” using “mechanism 1”, “mechanism 2”, and
                        “mechanism n” mechanisms
                        •  Carry out an assessment of all existing financing mechanisms that currently exist related to standard: “standard 1”
                        •    Evaluate global practices for financing mechanisms aimed at improving standard: “standard 1” within related services
                        •    Agree on the identified financial incentives required for quality improvement related to standard: “standard 1”
                        •  Work alongside financial experts to develop funding criteria and guidelines required to incentivize service providers to implement standard: “standard
                        1”
                        3. Develop governance structure to identify roles and responsibilities of stakeholders impacted by “standard 1”
                        •  Identify agencies and their staff related to financing “standard 1”
                        •  Identify rules, procedures, roles and responsibilities across the full decision-making process related to standard: “standard 1”
                        4. Educate and mobilize resources that might be impacted by suggested changes to service financing mechanisms
                        •  Inform and educate service providers and agencies impacted by suggested updates of financing mechanisms related to improving standard: “standard
                        1”
                        •  Equip service providers and agencies with resources required to successfully adopt suggested financing mechanisms
                        5. Roll-out financing mechanisms related to improving “standard 1”
                        •  Gain approval from appropriate agencies and introduce suggested financing mechanisms</Text>
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
