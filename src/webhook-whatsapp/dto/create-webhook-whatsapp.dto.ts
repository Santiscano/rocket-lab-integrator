export class CreateWebhookWhatsappDto {

    mode?: string;

    token?: string;

    challenge?: string;

    object?: any;

    entry?: {
        changes: {
            value: {
                messages: {
                    from: string,
                    text: {
                        body: string,
                    }
                }[],
                metadata: {
                    phone_number_id: string | number
                }
            }
        }[]
    }[];

}
