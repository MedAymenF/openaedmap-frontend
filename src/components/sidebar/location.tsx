import React, {FC} from 'react';
import { useTranslation } from 'react-i18next';
import SpanNoData from "./spanNoData";

const LocationDescription: FC<LocationProps> = ({ description }) => {
    if (description) {
        return <span className="has-text-weight-medium">{description}</span>
    } else {
        return <SpanNoData />
    }
}

export const LocationField: FC<LocationProps> = ({ description }) => {
    const { t } = useTranslation();

    return (
        <div>
        <p className="has-text-weight-light has-text-grey mb-1">
            {t("sidebar.location") + ": "}
        </p>
        <LocationDescription description={description} />
        </div>
    )
}

export const LocationFormField = () => {
    const { t, i18n: { resolvedLanguage } } = useTranslation();

    return (
        <div className="field pt-2">
            <label className="label has-text-weight-semibold">{`${t('form.location')} (${resolvedLanguage}):`}</label>
            <div className="control">
                <textarea name="aedLocation" className="textarea is-success" rows={2} placeholder={t("form.location_example")}></textarea>
            </div>
        </div>
    )
}

interface LocationProps {
    description: string,
}