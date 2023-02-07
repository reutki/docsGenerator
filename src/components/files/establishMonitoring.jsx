import React from 'react';
import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';

export const establishMonitoring = ({ name }) => {

    return (

        <Document>
            <Page orientation='landscape' size='A4'>
                <title>Implementation Charter – Establish a monitoring and enforcement system related to "standard 1”</title>
                <View>
                    <Text>Initiative</Text>
                    <Text>Establish monitoring and enforcement using “mechanism 1”, “mechanism 2”, and “mechanism n” mechanisms.
                        Activities</Text>
                </View>
                <View>
                    <Text>Activities</Text>
                    <Text>1. Identify government agency to lead efforts in identifying monitoring and enforcement system to monitor the performance of “standard 1”
                        •    Identify lead agency and form working group consisting of service providers and relevant government agencies to discuss efforts required to improve
                        monitoring and enforcement practices related to standard: “standard 1”
                        2. Develop draft for monitoring and enforcement system related to improving “standard 1” using “mechanism 1”, “mechanism 2”, and “mechanism n”
                        mechanisms
                        •  Carry out an assessment of all existing monitoring and enforcement that currently exist related to standard: “standard 1”
                        •    Evaluate global practices for monitoring and enforcement systems aimed at improving standard: “standard 1” within related services related
                        •    Agree on monitoring and enforcement required to improve monitoring and enforcement systems related to standard: “standard 1”
                        •  Work alongside subject matter experts to develop draft for “mechanism 1”, “mechanism 2”, and “mechanism n” mechanisms for standards and
                        regulations related to standard: “standard 1”
                        3. Develop governance structure to identify roles and responsibilities of stakeholders impacted by “standard 1”
                        •  Identify agencies and their staff related to  monitoring “standard 1”
                        •  Identify rules, procedures, roles and responsibilities across the full decision-making process related to standard: “standard 1
                        4. Educate and mobilize resources that might be impacted by suggested changes to monitoring and enforcement
                        •  Inform and educate service providers and agencies impacted by suggested updates of monitoring and enforcement related to  improving standard:
                        “standard 1”
                        •  Equip service providers and agencies with resources required to successfully adopt suggested monitoring and enforcement
                        5. Roll-out monitoring and enforcement system related to improving “standard 1”
                        •  Gain approval from appropriate agencies and introduce suggested monitoring and enforcement system </Text>
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
