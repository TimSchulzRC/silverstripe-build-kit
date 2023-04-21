<?php

namespace TimSchulzRC\CustomField;

use SilverStripe\Forms\FieldGroup;
use SilverStripe\Forms\FormField;

class CustomField extends FieldGroup
{
    protected $schemaDataType = FormField::SCHEMA_DATA_TYPE_CUSTOM;

    protected $schemaComponent = 'CustomField';
}
