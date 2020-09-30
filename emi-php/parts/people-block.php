<?php
function people_block($row)
{
  return <<<HTML
    <div class="people">
      <div class="people__icon">
        <img src="icons/{$row['people_icon']}" />
      </div>
      <div class="people__name">
        {$row['people_name']}
      </div>
      <div class="people__description">
        {$row['people_description']}
      </div>
    </div>
HTML;
}
